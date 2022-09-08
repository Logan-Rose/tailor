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

@Component({
  selector: 'tailor-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  editing = false
  constructor() {
    console.log('editor constructed')
    this.options = {}
    this.dashboard = []
  }
  // add Drop to add for saved components
  ngOnInit() {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      margin: 5,
      minCols:9,
      maxCols:9,
      minRows:9,
      maxRows:9,
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
       {cols: 2, rows: 4, y: 0, x: 0, title: 'Logan Rose', subtitle: 'Software Engineer'},
       {cols: 2, rows: 4, y: 0, x: 2, title: 'Coveo', subtitle: 'Software Developer Consultant', body: ' Did stuff'}
     ];
  }

  itemChange(){
    console.log("Item Changed")
  }
  itemResize(){
    console.log("Item Resized")
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({
      x: 0,
      y: 0,
      rows: 0,
      cols: 0
    });
  }
  addTile(){
    console.log('add tile')
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
  save(){
    console.log('Save')
    console.log(this.dashboard)
  }
  load(){
    console.log('Load')
  }
  print(){
    console.log('')
  }
  editMode(){
    this.editing = !this.editing
  }
}
