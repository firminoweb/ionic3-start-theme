import {Component} from "@angular/core";
import {NavController, LoadingController, ToastController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-checkout-trip',
  templateUrl: 'checkout-trip.html'
})
export class CheckoutTripPage {
  // trip data
  public trip: any;
  // number of adults
  public adults = 2;
  // date
  public date = new Date();

  public paymethods = 'creditcard';

  constructor(public nav: NavController, public tripService: TripService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // set sample data
    this.trip = tripService.getItem(1);
  }

  // process send button
  send() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Book Activity Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot(HomePage);
    }, 3000)
  }
}
