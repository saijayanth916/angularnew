import { Component } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userModel = new User(9, 'rob@test.com');
  errValue;
  constructor(private http:HttpClient){

       
  }

  ngOnInit(){

    this.http.get('./assets/config.json').subscribe((res)=>{
      console.log(res);
      this.errValue = res;
      console.log("errValue");
      console.log(this.errValue);
  });  


  }
}
