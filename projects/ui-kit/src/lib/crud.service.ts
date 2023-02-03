import { Injectable } from '@angular/core';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; layout: any }

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items/logan.rose0329@gmail.com/layouts');
    this.items = this.itemsCollection.valueChanges();
  }

  create(name: string, data: any){
    console.log(name)
    console.log(data)
    this.itemsCollection.add({name: name, layout: data});
    
  }
}
