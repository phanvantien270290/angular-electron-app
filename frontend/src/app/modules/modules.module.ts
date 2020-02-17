import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { ModulesRoutingModule } from './modules-routing.module';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FlexLayoutModule
    // DemoMaterialModule,
    // MatCardModule,
  ]
})
export class ModulesModule { }
