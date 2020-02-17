import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
export const UserRoutes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: UserComponent,
      data: {
        title: 'User List',
        urls: [
          { title: 'Dashboard', url: '/dashboard' },
          { title: 'User' }
        ]
      },
    },
    {
      path: 'create',
      component: CreateComponent,
      data: {
        title: 'Create',
        urls: [
          { title: 'User', url: '/user' },
          { title: 'Create' }
        ]
      },
    },
    {
      path: 'edit/:id',
      component: EditComponent,
      data: {
        title: 'Edit',
        urls: [
          { title: 'User', url: '/user' },
          { title: 'Edit' }
        ]
      },
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
