import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'tailor-load-dialog-component',
  templateUrl: './load-dialog.component.html',
  styleUrls: ['./load-dialog.component.scss'],
})
export class LoadDialogComponent implements OnInit {
  resumes$: Observable<any> | undefined
  selection: any;
  constructor(
    public dialogRef: MatDialogRef<LoadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.resumes$ = data
    this.resumes$?.subscribe((x: any) => {
      console.log(x)
    })

  }

  ngOnInit(): void {
  }

  selectItem(item: any){
    this.selection = item;
  }

  cancel() {
    this.dialogRef.close()

  }

  confirm() {
    this.dialogRef.close({data: this.selection})
  }

}
