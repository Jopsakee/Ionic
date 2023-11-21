
import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { UserService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  userData = { name: '', email: '', profilePicture: '' };

  constructor(private userService: UserService) {}

  async takeProfilePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    this.userData.profilePicture = 'data:image/jpeg;base64,' + image.base64String;
  }

  saveUserData() {
    this.userService.setUserData(this.userData);
  }
}

