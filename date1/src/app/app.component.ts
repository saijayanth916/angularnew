import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bsInlineValue = new Date();

            minDate: Date;
            maxDate: Date;  
          constructor() {
            this.minDate = new Date();
            this.maxDate = new Date();
            this.minDate.setMonth(this.minDate.getMonth() - 1);
            this.maxDate.setMonth(this.maxDate.getMonth() + 7);
          }
          disabledDates = [
            new Date('2019-03-11'),
            new Date('2019-04-02')
          ];
}
