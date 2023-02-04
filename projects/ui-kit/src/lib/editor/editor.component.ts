import { Component, OnInit } from '@angular/core';
import {
  CompactType,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';
import { v4 as uuidv4 } from 'uuid';
import {MatDialog} from '@angular/material/dialog';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { observable, Observable } from 'rxjs';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';
import { LoadDialogComponent } from '../load-dialog/load-dialog.component';

@Component({
  selector: 'tailor-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  background = true;
  resumes$: Observable<any[]> | undefined;

  constructor(public dialog: MatDialog, firestore: Firestore, public auth: AngularFireAuth) {
    console.log('editor constructed')
    let self = this
    auth.user.subscribe((x =>{
      const collectionVar = collection(firestore, `items/${x?.email}/layouts`);
      self.resumes$ = collectionData(collectionVar);
    }))
    
    this.options = {}
    this.dashboard = []
  }
  // add Drop to add for saved components
  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 5,
      minCols:20,
      maxCols:20,
      minRows:20,
      maxRows:20,
      useTransformPositioning: true,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
      pushItems: true,
      pushDirections: { north: true, east: true, south: true, west: true },
      itemChangeCallback: this.itemChange,
      itemResizeCallback: this.itemResize,
    };

     this.dashboard = [
       {id: uuidv4(), cols: 10, rows: 10, y: 0, x: 0, title: 'Logan Rose', subtitle: 'Software Engineer', align: "center", titleSize:12, subtitleSize:12, listItems: ['hello','goodbye'], dragEnabled: true},
       {id: uuidv4(), cols: 2, rows: 2, y: 0, x: 2, title: 'Coveo', subtitle: 'Software Developer Consultant', bodyType:'chip-list',listItems:['hello','goodbye','javascript','python','angular','nestjs','postgresql'], align:"left", titleSize:12, subtitleSize:12, dragEnabled: true}
     ];
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

  itemChange(){
    console.log('ITEM CHANGED')
    console.log(this)
  }
  itemResize(){
    console.log("Item Resized")
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addTile(){
    console.log('add tile')
    console.log(uuidv4())
    let layout = { id: uuidv4(), x: 0, y: 0, cols:9, rows: 3, title: 'New Tile', body: 'Double click to modify', titleSize:18, dragEnabled: true}
    console.log(layout)
    this.dashboard.push(layout);
  }
  save(){
    console.log('Save')
    console.log(this.dashboard)
    const dialogRef = this.dialog.open(SaveDialogComponent, {
      data: {
        dashboard: this.dashboard
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    
  }
  load(){
    console.log('Load')
    const dialogRef = this.dialog.open(LoadDialogComponent, {
      data: this.resumes$
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dashboard = result.data.layout.dashboard
    });
  }
  print(){
    console.log(this.dashboard)
  }

  lock(){
    console.log('Lockign')
    if(this.options.draggable){
      if(this.options.draggable.enabled != undefined){
        console.log(this.options.draggable.enabled)
        this.options.draggable.enabled = !this.options.draggable.enabled
      }
      if (this.options.api && this.options.api.optionsChanged) {
        this.options.api.optionsChanged();
      }
    }
  }

  updateRow(num: number){
    console.log(num)
  }
  updateCol(num: number){
    console.log(num)
  }

  duplicateTile(e: any){
    const duplicatedTile = Object.assign({}, e)
    duplicatedTile.id = uuidv4();
    this.dashboard.push(duplicatedTile);
    console.log(this.dashboard)
  }

  deleteTile(tileId: string){
    console.log(this.dashboard)
    console.log(tileId)
    this.dashboard = this.dashboard.filter(x => x['id'] !== tileId)
    console.log(this.dashboard)
  }
  saveTile(tile: any){
    console.log(tile)
    this.dashboard = this.dashboard.filter(x => x['id'] !== tile['id'])
    this.dashboard.push(tile)
    console.log(this.dashboard)
    
  }
  toggleEditMode(tile: any){
      tile.editing = !tile.editing
      tile.editMode = ! tile.editMode
      tile.dragEnabled = !tile.dragEnabled
      console.log(this.dashboard)
  }
  toggleBackground(){
    this.background = !this.background
  }

}
