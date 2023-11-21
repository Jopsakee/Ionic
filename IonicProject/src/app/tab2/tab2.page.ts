import { Component } from '@angular/core';
import { UserService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  userData: any;

  constructor(private userService: UserService, private router: Router) {
    this.userService.userData$.subscribe((data) => {
      this.userData = data;
    });
  }

  goToCreateProfile() {
    this.router.navigate(['/tabs/tab1']);
  }
}
