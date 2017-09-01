import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SubcategoryPage } from '../subcategory/subcategory';
/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }
  openMenu() {
    this.menuCtrl.open();
  }
  subcategorypage()
  {
    this.navCtrl.push(SubcategoryPage);
  }  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
