import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  
  constructor() { }

  ngOnInit() {
  }

}
