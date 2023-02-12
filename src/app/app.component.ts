import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, style, transition, query, group, animateChild, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('routeAnimations', [
    transition('*<=>*', [
      style({ height: '!' }),
      query(':enter', style({ transform: 'translateX(100%)' })), //// USTAWIA COMPONENT WEJSCIOWY POZA EKRAN ///
      query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })), /// NADAJE POZYCJE DLA COMPONENTU WEJSCIOWEGO I WYJSCIOWEGO////
      group([
        query(':leave', [
          animate('1s  ease', style({ transform: 'translateX(-100%)' })), //// COMPONENT WYJSCIOWY JEST PRZESUWANY W LEWO O 100%
        ]),
        // and now reveal the enter
        query(':enter', animate('1s 0.5s ease', style({ transform: 'translateX(0)' }))), ///// KOMPONENT WCHODZACY JEST PRZESUWANY NA SWOJE MIEJSCE /////
      ]),
    ])
  ])]

})
export class AppComponent {
  title = 'my-portfolio';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData
  }

}
