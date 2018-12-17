import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-newcards',
  templateUrl: './newcards.component.html',
  styleUrls: ['./newcards.component.css']
})
export class NewcardsComponent implements OnInit {

  @Output('cardRequest') sendCard = new EventEmitter()
  card : Card = { title:'', content:'', important: false, status: false};

  log(ng){
    console.log(ng)
  }

  addNewCard(){
    this.sendCard.emit(this.card)
    this.card = { title:'', content:'', important: false, status: false};
  }

  constructor() { }

  ngOnInit() {
  }

}
