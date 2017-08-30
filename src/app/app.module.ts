import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SelectLanguagePage } from '../pages/select-language/select-language';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SupermarketsPage } from '../pages/supermarkets/supermarkets';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SelectLanguagePage,
    LoginPage,
    RegisterPage,
    SupermarketsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SelectLanguagePage,
    LoginPage,
     RegisterPage,
     SupermarketsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
