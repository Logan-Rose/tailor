import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { GridsterModule } from 'angular-gridster2';
import { TileComponent } from './tile/tile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TestComponent } from './test/test.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { LoadDialogComponent } from './load-dialog/load-dialog.component';
import { MatListModule } from '@angular/material/list';
import { CrudService } from './crud.service';
@NgModule({
  declarations: [
    TestComponent,
    EditorComponent,
    TileComponent,
    SaveDialogComponent,
    EditDialogComponent,
    LoadDialogComponent
  ],
  imports: [
    CommonModule,
    GridsterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatListModule
  ],
  exports: [
    TestComponent,
    EditorComponent, 
    TileComponent
  ],
  providers: [
    CrudService
  ]
})
export class UiKitModule { }
