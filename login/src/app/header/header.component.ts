import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name;
  constructor(private user: UserService,private router: Router) { }

  ngOnInit() {
    this.name = this.user.setUser();
  }
  logout(){
    this.router.navigate(['login']);
  }

}
