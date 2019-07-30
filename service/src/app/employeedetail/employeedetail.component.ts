import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  public employees = [];
  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit() {
    this._employeeservice.getEmployees()
    .subscribe(data => this.employees = data);
  }

}
