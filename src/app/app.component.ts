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

  private VAPID_PUBLIC_KEY = 'BDNmu_6uDPDF1hj0UdH8TXTJrF3NDU2jBBFVj-wK3LO4_19eptc4_kHXdix3Ejm0pw6zbTwxjay9SfTER3yGExI';
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
