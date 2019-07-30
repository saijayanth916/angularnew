import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { GraphComponent } from './graph/graph.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { Table1Component } from './table1/table1.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ExcelserviceService } from './excelservice.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TableComponent,
    FormComponent,
    GraphComponent,
    TemplateComponent,
    ReactiveComponent,
    LinechartComponent,
    PiechartComponent,
    Table1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [UserService,AuthguardGuard,ExcelserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
