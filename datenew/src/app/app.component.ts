import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datenew';
  bsValue = new Date();
  datesEnabled = new Date();
  minDate: Date;
  constructor() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    
  }
}
