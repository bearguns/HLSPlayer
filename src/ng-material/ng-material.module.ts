import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Material Components
import { MatToolbarModule, MatCardModule, MatDividerModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: []
})
export class NgMaterialModule { }
