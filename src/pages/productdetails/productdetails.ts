import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
/**
 * Generated class for the ProductdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-productdetails',
  templateUrl: 'productdetails.html',
})
export class ProductdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menuCtrl: MenuController) {
  }
  openMenu() {
    this.menuCtrl.open();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdetailsPage');
  }
  cartpage(){
    this.navCtrl.push(CartPage);
  }
}
