import { Component,HostListener,ViewChild } from '@angular/core';
import { BsDatepickerDirective,BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      //for initial state
 // bsInlineValue = new Date();
 //bsRangeValue: Date[];

        // hide on window scroll
//  @ViewChild(BsDatepickerDirective) datepicker: BsDatepickerDirective;
 
//   @HostListener('window:scroll')
//   onScrollEvent() {
//     this.datepicker.hide();
//   }
                // min and max dates
          //   minDate: Date;
          //   maxDate: Date;  
          // constructor() {
          //   this.minDate = new Date();
          //   this.maxDate = new Date();
          //   this.minDate.setDate(this.minDate.getDate() - 1);
          //   this.maxDate.setDate(this.maxDate.getDate() + 7);
          // }
                //disabled dates
          disabledDates = [
            new Date('2019-02-05'),
            new Date('2019-02-08')
          ];
                    // min mode to Month
          // minMode: BsDatepickerViewMode = 'month';
          // bsConfig: Partial<BsDatepickerConfig>;
          // ngOnInit(): void {
          //   this.bsConfig = Object.assign({}, {
          //     minMode : this.minMode
          //   });
          // }
                  //for forms which date we are selecting.
          datepickerModel: Date;
          daterangepickerModel: Date[];

                  //min date disabled.
          @ViewChild('dp') datepicker: BsDaterangepickerDirective;
 
          bsConfig: Partial<BsDatepickerConfig>;
          minDate = new Date(2019, 1, 13);
        
          setOptions(): void {
            this.bsConfig = Object.assign({}, { minDate: this.minDate });
            this.datepicker.setConfig();
        
            
           }

          dateValue;
          constructor(private http:HttpClient){

       
          }
          ngOnInit(){

            this.http.get('./assets/date.json')
            .subscribe(
              (res)=>{
              console.log(res);
              this.dateValue = res;
              console.log("datevalue");
              console.log(this.dateValue.date);
          }); 
          }

}

