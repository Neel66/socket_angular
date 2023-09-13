import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyMaterialModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
    }),
    MatGridListModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyMaterialModule,
    ToastrModule,
    MatGridListModule,
  ],
})
export class SharedModule {}
