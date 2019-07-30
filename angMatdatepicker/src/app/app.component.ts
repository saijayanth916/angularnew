import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new FormControl(new Date());
  //minDate = new Date(2000, 0, 1);
  //maxDate = new Date(2020, 0, 1);
  //serializedDate = new FormControl((new Date()).toISOString());
}
