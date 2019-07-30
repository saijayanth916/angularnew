import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ExcelserviceService} from '../excelservice.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  value;
  // filterData;
  // public searchString : string;
  constructor(private http: HttpClient, private excelService:ExcelserviceService) { }
  // search(term:string){
  //   if(!term) {
  //     this.filterData = this.value.slno;
  //   }else{
  //     this.filterData = this.value.slno.filter(value=>
  //       value.Login.trim().toLowerCase().includes(term.trim().toLowerCase()));
  //   }
  // }
  ngOnInit() {
    this.http.get('./assets/data.json').subscribe((res)=> {
      console.log(res);
      this.value=res;
      console.log(this.value);
    })
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.value, 'sample');
 }

}
