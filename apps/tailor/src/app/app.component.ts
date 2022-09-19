import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@tailor/api-interfaces';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'tailor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  item$: Observable<any[]>;
  constructor(private http: HttpClient, firestore: Firestore, public auth: AuthService) {
    const collect = collection(firestore, 'items');
    this.item$ = collectionData(collect);

    this.item$.subscribe(x =>{
      console.log(x)
    })

  }

}
