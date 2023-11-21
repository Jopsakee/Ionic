import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDataSubject = new BehaviorSubject<any>({});
  userData$: Observable<any> = this.userDataSubject.asObservable();

  setUserData(data: any, profilePicture?: string) {
    if (profilePicture) {
      data = { ...data, profilePicture };
    }
    this.userDataSubject.next(data);
  }

  getUserData(): any {
    return this.userDataSubject.value;
  }
  
  deleteUserData() {
    this.setUserData({});
  }
}
