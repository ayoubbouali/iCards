import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  
  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit() {
    this.recupCard()
  }

  title = 'iCards';

  cards = [];
  searchCards = [];
  card : Card = { title:'', content:'', important: false, status: false};
  length = this.cards.length
  
  search(query){
    console.log(query)
    this.searchCards = query ? this.cards.filter(card => card.title === query ) : this.cards
  }

  recupCard(){
  this.cardService.getCards().subscribe( (res: any[]) => { this.searchCards = this.cards = res } );
  }

  editeZone(id){
    this.cards[id].status = !this.cards[id].status
  }

  editeCard(id){
    this.cards[id].status = !this.cards[id].status
    this.cardService.setCard(this.cards[id])
    .then( () => this.router.navigate(['/cards']) )
    .catch( (error) => console.error(error.message) )
  }

  childToParent(statut, Card){
    Card.important = statut
    this.cardService.setCard(Card)
    .then( () => this.router.navigate(['/cards']) )
    .catch( (error) => console.error(error.message) )
  }

  deleteCard(id){

              Swal({
                title: 'Are you sure?',
                text: 'You can not recover this card!',
                type: 'question',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                timer: 3000
              }).then((result) => {
                if (result.value) {
                  this.cardService.deleteCard(this.cards[id]) //.then( res => console.log("ok") ).catch( res => console.log("ok") )
                  Swal({
                    title: 'Deleted',
                    text: 'this card has been removed successfully!',
                    type: 'success',
                    timer: 3000
                  })
                }
              })

  }

  addCard(Card) {
    this.cardService.persistCard(Card)
 }

}
