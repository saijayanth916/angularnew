import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  username;
  // username1: any;
  user:any;
  constructor() { 
    this.isUserLoggedIn = false;
  }
  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
  getUser(username) {
    this.user = username;
  }
  setUser() {
    return this.user;
  }
}
