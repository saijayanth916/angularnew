import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics= [
    'angular',
    'react',
    'Vue'
  ];
  userModel = new User('', 'rob@test.com', 5556665566, '', 'morning', true);
}
