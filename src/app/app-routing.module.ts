import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseLayoutComponent} from './core/layout/base-layout/base-layout.component';
import {LoginLayoutComponent} from './core/layout/login-layout/login-layout.component';
import {LoginComponent} from './modules/login/components/login.component';

const routes: Routes = [
  //  app layout goes here
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: LoginComponent,
        // canActivate: [AuthGuard],
      },
    ]
  },

  //  login layout goes here
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  }
  // empty layout goes here
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
