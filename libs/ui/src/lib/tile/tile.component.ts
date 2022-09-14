import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { GridsterItem } from 'angular-gridster2';

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
  @Input() body?: string;
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

  constructor() {
    console.log('Tile Constructed')
  }

  ngOnInit(): void {
    console.log('Tile Initilized')
  }

  toggleEdit() {
    this.editing = !this.editing
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
}
