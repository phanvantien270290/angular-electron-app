import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ModulesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ModulesRoutes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
