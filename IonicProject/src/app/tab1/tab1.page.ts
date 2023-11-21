
import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { UserService } from '../services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  userData = { name: '', email: '', profilePicture: '' };

  constructor(private userService: UserService, private alertController: AlertController) {
    this.userService.userData$.subscribe((data) => {
      this.userData = data;
    });
  }

  async takeProfilePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    this.userData.profilePicture = 'data:image/jpeg;base64,' + image.base64String;
  }

  saveUserData() {
    if (!this.userData.name || !this.userData.email) {
      this.presentErrorAlert('Please fill in all required fields.');
      return;
    }
    this.userService.setUserData(this.userData);
    this.presentSuccessAlert('Successfully created profile!');
  }

  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}

