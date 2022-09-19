import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any> | undefined
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
    ) {
      this.user$ = this.afAuth.authState.pipe(
        switchMap(u =>{
          if(u){
            return this.afs.doc<any>(`users/${u.uid}`).valueChanges();
          }else{
            return of(null)
          }
        })
      )

  }
  public async googleSignin() {
    const prov = new firebase.auth.GoogleAuthProvider();
    const cred = await this.afAuth.signInWithPopup(prov)
    return this.updateUserData(cred.user)
  }

  async signOut() {
    await this.afAuth.signOut();
  }

  private updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`)

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }
    return userRef.set(data, {merge: true})
  }
}
