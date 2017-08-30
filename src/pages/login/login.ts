import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SupermarketsPage } from '../supermarkets/supermarkets';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
registerpage()
{ 
  this.navCtrl.push(RegisterPage);
}

supermarketspage()
{ 
  this.navCtrl.push(SupermarketsPage);
}
}
