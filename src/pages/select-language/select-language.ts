import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-select-language',
  templateUrl: 'select-language.html'
})
export class SelectLanguagePage {

  constructor(public navCtrl: NavController) {


  }
  loginpage()
  {
    this.navCtrl.push(LoginPage);
  }

}
