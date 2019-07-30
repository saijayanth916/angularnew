import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { GraphComponent } from './graph/graph.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveComponent } from './reactive/reactive.component';
const routes: Routes = [
  {
    path:'dashboard',
    canActivate:[AuthguardGuard],
    component: DashboardComponent

  },
  {
    path:'',
    component: LoginFormComponent
  },
  {
    path:'login',
    component: LoginFormComponent
  },
  {
    path: 'table',
    component:TableComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'reactive',
    component: ReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
