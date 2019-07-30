import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = "credentials are not valid";
  constructor(private router: Router,private user: UserService) { }

  ngOnInit() {
  }
  loginUser(e) {
    
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this.user.getUser(username);
    if(username == 'Jayanth' && password == 'Blockchain') {
      this.user.setUserLoggedIn();
      this.router.navigate(['table']);
    }else {
      alert(this.error);
    }
  }

}
