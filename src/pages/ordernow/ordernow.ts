import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the OrdernowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-ordernow',
  templateUrl: 'ordernow.html',
})
export class OrdernowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdernowPage');
  }
  openMenu() {
    this.menuCtrl.open();
  }
}
