import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('list => cards', [
        style({
          height: '!',
        }),
        query(
          ':enter',
          style({ transform: 'translateX(100%)', width: '1000px' })
        ),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0 })
        ),
        group([
          query(':leave', [
            animate(
              '.5s ease-in',
              style({ transform: 'translateX(-100%)', opacity: 0 })
            ),
          ]),
          query(':enter', [
            animate('1s ease-out', style({ transform: 'translateX(0)' })),
          ]),
        ]),
      ]),
      transition('cards => list', [
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0 })
        ),
        query(':leave', [
          animate('1s ease-out', style({ transform: 'translateY(100%)' })),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'angular-animations';

  getPage(outlet) {
    if (outlet.activatedRouteData['page']) {
      console.log(outlet.activatedRouteData);
      return outlet.activatedRouteData['page'];
    }
  }
}
