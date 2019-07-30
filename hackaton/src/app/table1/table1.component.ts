import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ExcelserviceService} from '../excelservice.service';
@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  result;
  constructor(private http: HttpClient,private excelService:ExcelserviceService) { }

  ngOnInit() {
    this.http.get('./assets/test.json').subscribe((res)=> {
      console.log(res);
      this.result=res;
      console.log(this.result);
    })
  }
  exportAs():void {
    this.excelService.exportAsExcelFile(this.result, 'sample');
 }

}
