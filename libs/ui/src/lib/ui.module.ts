import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { GridsterModule } from 'angular-gridster2';
import { TileComponent } from './tile/tile.component';
import { NgxPrintModule } from 'ngx-print';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
@NgModule({
  imports: [CommonModule, GridsterModule, NgxPrintModule, MatFormFieldModule, MatInputModule, FormsModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSliderModule],
  declarations: [EditorComponent, TileComponent],
  exports: [EditorComponent, TileComponent],
})
export class UiModule {}
