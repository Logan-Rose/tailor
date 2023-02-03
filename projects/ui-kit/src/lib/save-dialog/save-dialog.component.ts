import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CrudService } from '../crud.service';

@Component({
  selector: 'tailor-save-dialog-component',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss'],
})
export class SaveDialogComponent implements OnInit {

  name= '';

  constructor(
    public dialogRef: MatDialogRef<SaveDialogComponent>,
    public crudService: CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    console.log('initialized');
  }

  save(){
    this.crudService.create(this.name, this.data)
  }
}