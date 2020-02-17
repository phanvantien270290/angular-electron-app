import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { FullComponent } from './layouts/full/full.component';
export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboards',
        pathMatch: 'full'
      },
      // {
      //   path: 'user',
      //   loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      // },
      {
        path: '',
        loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
      },
      {
        path: 'dashboards',
        loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
      },
      {
        path: 'material',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
      },
      // {
      //   path: 'datatables',
      //   loadChildren: () => import('./datatables/datatables.module').then(m => m.DataTablesModule)
      // },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./charts/chartslib.module').then(m => m.ChartslibModule)
      }
    ]
  }
];
