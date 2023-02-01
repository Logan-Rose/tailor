import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tailor-edit-dialog-component',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  name= '';
  chipCtrl = new FormControl('');
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tile: any;
  readonly BODY_TYPES = [
    'text',
    'bullet-list',
    'chip-list'
  ];

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.tile = data;
  }

  ngOnInit(): void {
  }

  edit(){
    console.log('edit');
    console.log(this.tile)
  }

  onValueUpdate(event: any){

  }

  addItem(){}
  removeLastItem(){}
  removeItemAtPos(index: any){}
  addChip(event:any){
    // if(e.value != ''){
    //   this.listItems.push(e.value)
    //   console.log(this.listItems)
    // }

    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tile.listItems.push(value);
    }

    // Clear the input value
    event.chipInput?.clear();

    this.chipCtrl.setValue(null);

  }
}
