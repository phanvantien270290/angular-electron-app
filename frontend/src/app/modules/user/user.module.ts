import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { UserComponent } from './user.component';
import { DemoMaterialModule } from '../../demo-material-module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserService } from '../../services/user.service';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomFormsModule } from 'ng2-validation';
@NgModule({
  declarations: [UserComponent, EditComponent, CreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    RouterModule.forChild(UserRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    NgxDatatableModule
  ],
  providers: [UserService]
})
export class UserModule { }
