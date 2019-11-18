import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { DemoMaterialModule } from '../demo-material-module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataTablesRoutes } from './datatables.routing';
import { DataTableComponent } from './data-table/data-table.component';
import { MaterialTableComponent } from './materialtable/materialtable.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { DatatablesService } from './datatables.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DataTablesRoutes),
    MatInputModule,
    NgxDatatableModule,
    DemoMaterialModule
  ],
  declarations: [
    DataTableComponent,
    TableEditingComponent,
    TableFilterComponent,
    MaterialTableComponent
  ],
  providers: [DatatablesService]
})
export class DataTablesModule { }
