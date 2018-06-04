import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Material Components
import { MatToolbarModule, MatCardModule, MatDividerModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialDesignComponentsModule { }
