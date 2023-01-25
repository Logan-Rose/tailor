import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

@Component({
  selector: 'tailor-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit, GridsterItem{
  @Input() id!: string;
  @Input() x!: number;
  @Input() y!: number;
  @Input() rows!: number;
  @Input() cols!: number;
  @Input() dragEnabled?: boolean;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() bodyType?: string;
  @Input() body?: string;
  @Input() listItems: string[] = [];
  @Input() fromDate?: Date;
  @Input() toDate?: Date;
  @Input() align?: string;
  @Input() titleSize?: number = 12;
  @Input() subtitleSize?: number = 12;
  @Input() editMode?: boolean;
  editing = false;
  @Output() duplicateEvent = new EventEmitter<TileComponent>();
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() saveEvent = new EventEmitter<TileComponent>();
  chipCtrl = new FormControl('');

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  readonly BODY_TYPES = [
    'text',
    'bullet-list',
    'chip-list'
  ];


  constructor(public dialog: MatDialog) {
    console.log('Tile Constructed')
  }

  ngOnInit(): void {
    console.log('Tile Initilized')
  }

  launchEditDialog(){
    console.log('Edit')
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: this
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    
  }


  simplifyDate(date: Date){
    return MONTHS[date.getMonth()] + ' ' + date.getFullYear()
  }

  lockTile(){
    console.log('locking')
  }

  duplicate(){
    console.log('duplicate')
    console.log(this)
    this.duplicateEvent.emit(this)
  }

  deleteTile(){
    console.log('Delete')
    this.deleteEvent.emit(this.id)
  }

  save(){
    console.log(this)
    this.saveEvent.emit(this)
  }
  addItem(){
    this.listItems?.push('')
  }
  removeLastItem(){
    this.listItems?.pop()
  }
  removeItemAtPos(index:number){
    this.listItems?.splice(index)
  }
  onValueUpdate(e:any){
    console.log(e)
    this.listItems[parseInt(e.target.name)] = e.target.value
    console.log(this.listItems)
  }

  addChip(event:any){
    // if(e.value != ''){
    //   this.listItems.push(e.value)
    //   console.log(this.listItems)
    // }

    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.listItems.push(value);
    }

    // Clear the input value
    event.chipInput?.clear();

    this.chipCtrl.setValue(null);

  }


}