import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Output() public newPrice = new EventEmitter<any>();

  public price:any;

  ngOnInit() {
  }

  onchange(value) {
    this.newPrice.emit(value);
  }

}
