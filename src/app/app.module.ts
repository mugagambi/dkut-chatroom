import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule,AuthMethods,AuthProviders } from 'angularfire2'
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

//config
export const firebaseConfig = {
  apiKey: 'AIzaSyBodqvCFvIKrcR5DiWxXa3KroOWK3RKp1w',
  authDomain: 'dkut-chart-room.firebaseapp.com',
  databaseURL: 'https://dkut-chart-room.firebaseio.com',
  storageBucket: 'dkut-chart-room.appspot.com',
  messagingSenderId: '275573602811'
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
