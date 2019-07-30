import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees = [];
  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit() {
    this._employeeservice.getEmployees()
    .subscribe(data => this.employees = data);
  }

}
