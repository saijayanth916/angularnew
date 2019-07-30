import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDatepickerModule,MatInputModule,MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' 

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { DisabledComponent } from './disabled/disabled.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    DisabledComponent
  ],
  imports: [
    BrowserModule,  
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
