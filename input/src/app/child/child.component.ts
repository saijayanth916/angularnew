import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() myAwesomeValue;
  @Output() myOutputValue = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.myAwesomeValue + 'is what i got');
    this.myOutputValue.emit('hello from child');
  }
  @Input() public newPrice: string;
  

}
