import { Component } from '@angular/core';
import { UserService } from '../services/data.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

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

  editProfilePicture() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    }).then((image) => {
      const newProfilePicture = 'data:image/jpeg;base64,' + image.base64String;
      this.userService.setUserData(this.userData, newProfilePicture);
    }).catch((error) => {
      console.error('Error taking profile picture:', error);
    });
  }
}
