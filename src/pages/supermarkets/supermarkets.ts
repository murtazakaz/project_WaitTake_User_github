import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
/**
 * Generated class for the CategoriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-supermarkets',
  templateUrl: 'supermarkets.html',
})
export class SupermarketsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }
  openMenu() {
    this.menuCtrl.open();
  }
  categorypage()
  {
    this.navCtrl.push(CategoryPage);
  }  
}
