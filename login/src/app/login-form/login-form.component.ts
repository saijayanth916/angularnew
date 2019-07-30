import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
   error = "credentials are not valid";
   message = 'Username or password is incorrect';
  constructor(private router: Router,private user: UserService) { }
erro=false;
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
      this.router.navigate(['dashboard']);
    }else {
      this.erro=true;
    }
  }
}
