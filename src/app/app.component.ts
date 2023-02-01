import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';
import { observable, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailor';
  item$: Observable<any[]>;
  constructor(firestore: Firestore, public auth: AngularFireAuth) {
    const collectionVar = collection(firestore, 'items');
    this.item$ = collectionData(collectionVar);
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
