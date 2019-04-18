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

  private VAPID_PUBLIC_KEY = 'BGal3cKBZkSx8ymaFACUhGS1DpsgUO_xmjUzkk0zYr1es6pjFKscTQ_9RMv8zwOEYuedFWp_H91IAjuTKiapueM';
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
