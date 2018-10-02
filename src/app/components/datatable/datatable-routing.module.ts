import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableDemo1Component } from './demo1/data-table-demo1';


const routes: Routes = [
  {
    path: 'demo1',
    component: DataTableDemo1Component,
    data: {src: 'datatable/demo1/data-table-demo1' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }
