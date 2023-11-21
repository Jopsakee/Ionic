import { Component } from '@angular/core';
import { UserService } from '../services/data.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  userData: any;
  constructor(private userService: UserService, private alertController: AlertController) {
    this.userService.userData$.subscribe((data) => {
      this.userData = data;
    });
  }

  deleteProfile() {
    this.userService.deleteUserData();
    this.presentSuccessAlert('Successfully deleted profile!');
    this.userData = {};
  }

  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
