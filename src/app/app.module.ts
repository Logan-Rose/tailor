import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiKitModule } from 'projects/ui-kit/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GridsterModule } from 'angular-gridster2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UiKitModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridsterModule,
    UiKitModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
