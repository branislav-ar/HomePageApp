import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationData } from './notification-data.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //observable
  private notification$: Subject<NotificationData> = new Subject()

  getNotifications() {
    return this.notification$.asObservable();
  }

  constructor() { }

  //pri pozivu show tekst 'text' elementa se salje svim subskrajberima
  show(text: string, duration = 5000) {
    this.notification$.next({ text, duration });
  }

}
