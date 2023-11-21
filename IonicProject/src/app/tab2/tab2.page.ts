import { Component } from '@angular/core';
import { UserService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  userData: any;

  constructor(private userService: UserService) {
    this.userData = this.userService.getUserData();
  }
}
