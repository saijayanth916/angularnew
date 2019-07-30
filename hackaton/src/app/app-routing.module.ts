import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { AuthguardGuard } from './authguard.guard';
import { GraphComponent } from './graph/graph.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { Table1Component } from './table1/table1.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'header',
    canActivate:[AuthguardGuard],
    component: HeaderComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'table',
    canActivate:[AuthguardGuard],
    component:TableComponent
  },
  {
    path: 'form',
    canActivate:[AuthguardGuard],
    component: FormComponent
  },
  {
    path: 'graph',
    canActivate:[AuthguardGuard],
    component: GraphComponent
  },
  {
    path: 'template',
    canActivate:[AuthguardGuard],
    component: TemplateComponent
  },
  {
    path: 'reactive',
    canActivate:[AuthguardGuard],
    component: ReactiveComponent
  },
  {
    path: 'linechart',
    canActivate:[AuthguardGuard],
    component: LinechartComponent
  },
  {
    path: 'piechart',
    canActivate:[AuthguardGuard],
    component: PiechartComponent
  },
  {
    path: 'table1',
    canActivate:[AuthguardGuard],
    component: Table1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
