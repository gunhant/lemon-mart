import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [ MatButtonModule, MatToolbarModule, MatIconModule ],
//    CommonModule
  exports: [ MatButtonModule, MatToolbarModule, MatIconModule ]
})
export class MaterialModule { }
