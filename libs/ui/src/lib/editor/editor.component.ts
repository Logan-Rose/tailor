import { Component, OnInit } from '@angular/core';
import {
  CompactType,
  DisplayGrid,
  Draggable,
  GridsterConfig,
  GridsterItem,
  GridType,
  PushDirections,
  Resizable
} from 'angular-gridster2';
import { TileComponent } from '../tile/tile.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'tailor-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  background = true;
  constructor() {
    console.log('editor constructed')
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
       {id: uuidv4(), cols: 10, rows: 10, y: 0, x: 0, title: 'Logan Rose', subtitle: 'Software Engineer', align: "center", titleSize:12, subtitleSize:12},
       {id: uuidv4(), cols: 2, rows: 2, y: 0, x: 2, title: 'Coveo', subtitle: 'Software Developer Consultant', body: ' Did stuff', dragEnabled: true, align:"left", titleSize:12, subtitleSize:12}
     ];
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
    this.dashboard.push({ id: uuidv4(), x: 0, y: 0, cols: 1, rows: 1 });
  }
  save(){
    console.log('Save')
    console.log(this.dashboard)
  }
  load(){
    console.log('Load')
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
  toggleEditMode(e: any){
    e.editing = !e.editing
    e.dragEnabled = !e.dragEnabled
    console.log(e)
  }
  toggleBackground(){
    this.background = !this.background
  }
}
