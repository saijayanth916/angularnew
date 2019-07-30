import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any
  public from;
  public to;
  public DOD;
  public DOR;
  constructor() { }

  ngOnInit() {
  }
  show1() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
  }
  
  submit(){
    console.log(this.from);
    console.log(this.to);
    console.log(this.DOD);
    console.log(this.DOR);
  } 
}
