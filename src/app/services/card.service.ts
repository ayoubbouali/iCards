import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Card } from '../models/card';
import { map } from 'rxjs/Operators'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private afs: AngularFirestore) { }

  getCards() {
    // return this.afs.collection('clients').valueChanges();//valueChanges équivalent de SELECT en sql
    return this.afs.collection('cards').snapshotChanges().pipe(
     map(actions => actions.map(a => {
               const data = a.payload.doc.data() as Card;
               const id = a.payload.doc.id;
               return { id, ...data };
           }))
           ) ;
   }
 
   persistCard(data){
     return this.afs.collection('cards').add(data)
   }
 
   setCard(card){
     return this.afs.collection('cards').doc(card.id).update(card);
    }

    deleteCard(card){
      console.log(card)
      this.afs.collection('cards').doc(card.id).delete();
    }

}
