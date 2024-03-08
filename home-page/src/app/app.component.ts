import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { bufferToggle, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';


map
import { AppState } from './app-store.model';
import { Bookmark } from './shared/bookmark-shared/bookmark.model'

const baseStyles = style({
  position: 'absolute', 
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'block'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnim', [
      /*
      increment radi animaciju kad se ide:
      tab1 -> tab2
      tab2 -> tab3 
      tab1 -> tab3
      */
      transition(':increment', [
        
        style({ 
          position: 'relative',
          overflow: 'hidden'
        }),

        query(':enter, :leave', [
          baseStyles
        ], { optional: true }),

        group([
          query(':leave', [
            animate('300ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-80px)'
            }))
          ], { optional: true }),
          
          query(':enter', [
            style({
              transform: 'translateX(80px)',
              opacity: 0
            }),
            animate('300ms 140ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ], { optional: true })
        ]),
      ]),

      /*
      decrement radi animaciju kad se ide:
      tab3 -> tab2
      tab2 -> tab1 
      tab3 -> tab1
      */

      transition(':decrement', [
        
        style({ 
          position: 'relative',
          overflow: 'hidden'
        }),

        query(':enter, :leave', [
          baseStyles
        ], { optional: true }),

        group([
          query(':leave', [
            animate('300ms ease-in', style({
              opacity: 0,
              transform: 'translateX(80px)'
            }))
          ], { optional: true }),
          
          query(':enter', [
            style({
              transform: 'translateX(-80px)',
              opacity: 0
            }),
            animate('300ms 140ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ], { optional: true })
        ]),
      ]),
      
      transition('secondary => *', [
        
        
          style({ 
            position: 'relative',
            /* overflow: 'hidden' */
          }),
  
          query(':enter, :leave', [
            baseStyles
          ], { optional: true }),
  
          group([
            query(':leave', [
              animate('300ms ease-in', style({
                opacity: 0,
                transform: 'scale(0.8)'
              }))
            ], { optional: true }),
            
            query(':enter', [
              style({
                transform: 'scale(1.2)',
                opacity: 0
              }),
              animate('300ms 140ms ease-out', style({
                opacity: 1,
                transform: 'scale(1)'
              }))
            ], { optional: true })
         ])
       
      ]),

      transition('* => secondary', [
        
        
        style({ 
          position: 'relative',
          /* overflow: 'hidden' */
        }),

        query(':enter, :leave', [
          baseStyles
        ], { optional: true }),

        group([
          query(':leave', [
            animate('300ms ease-in', style({
              opacity: 0,
              transform: 'scale(1.25)'
            }))
          ], { optional: true }),
          
          query(':enter', [
            style({
              transform: 'scale(0.8)',
              opacity: 0
            }),
            animate('300ms 140ms ease-out', style({
              opacity: 1,
              transform: 'scale(1)'
            }))
          ], { optional: true })
       ])
     
    ])
    ])
  ]
})



export class AppComponent implements OnInit {

  dateTime: Observable<Date>

  ngOnInit() {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date()
      })
    )
  }

  prepareRoute(outlet: RouterOutlet) {
    if(outlet.isActivated) {
      //regulacija promne taba!
      const tab = outlet.activatedRouteData['tab'];
      if(!tab)
        return 'secondary'
      else
        return tab;
    }
    else
      return null;
  }

}