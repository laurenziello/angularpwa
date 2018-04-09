import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'notifiche';
  test: any;

  private VAPID_PUBLIC_KEY = 'BMEitf33t5z7NaHUsECq_04UefRRT-y9dWn0bQ2OLgh_Wq-K7Uz8lFwCuz_rMNMjqyMWarLufHlIHZtImMTg4ys';
  constructor(private swPush: SwPush) {

  }

  ngOnIn() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(pushSubscription => {
        this.test = pushSubscription;
        // Passing subscription object to our backend
        console.error(pushSubscription);

      })
      .catch(err => {
        console.error(err);
      });
  }


}
