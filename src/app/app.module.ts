import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LibretaPage, TodoPage,NuevoContactoPage, VerContactoPage } from '../pages/pages';
import{ContactService} from '../services/contacts.service';
import {FIREBASE_CONFIG} from '../app/firebase.credentials';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LibretaPage,
    TodoPage,
    NuevoContactoPage,
    VerContactoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LibretaPage,
    TodoPage,
    NuevoContactoPage,
    VerContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService
  ]
})
export class AppModule {}
