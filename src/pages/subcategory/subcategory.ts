import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProductdetailsPage } from '../productdetails/productdetails';
/**
 * Generated class for the SubcategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-subcategory',
  templateUrl: 'subcategory.html',
})
export class SubcategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menuCtrl: MenuController) {
  }
  productdetails()
  { 
    this.navCtrl.push(ProductdetailsPage);
  }
  openMenu() {
    this.menuCtrl.open();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcategoryPage');
  }
  

}
