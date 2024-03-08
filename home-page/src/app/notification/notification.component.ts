import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NotificationData } from '../shared/notifications/notification-data.model';
import { NotificationService } from '../shared/notifications/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(5px)'
        }),
        animate('300ms 123ms ease-out')
      ]),
      transition(':leave', [
          animate(200, style({
            opacity: 0,
            transform: 'scale(0.60)'
            }))
          ])
      ])
  ]
})

export class NotificationComponent implements OnInit {

  notification: NotificationData[] | null
  timeout: any


  constructor(private notifivationService: NotificationService) { }

  ngOnInit(): void {
    this.notifivationService.getNotifications().subscribe((notification: NotificationData) => {
      this.notification = Array(notification);

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.notification = null;
      }, notification.duration)
    })
  }

}
