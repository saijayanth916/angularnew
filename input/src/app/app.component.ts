import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Input Decorator';
  awesomeMethod(ev){
    console.log(ev,'got some text');
  }
}
