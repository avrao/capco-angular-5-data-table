import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// module
import { DataTableModule } from 'angular5-data-table';
// demo components
import { DataTableDemo1Component } from './demo1/data-table-demo1';
// routing
import { DataTableRoutingModule } from './datatable-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule.forRoot(),
    DataTableRoutingModule
  ],
  declarations: [
    DataTableDemo1Component
  ]
})
export class DataTableDemoModule { }
