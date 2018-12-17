import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
})
export class ImportantComponent implements OnInit {

  @Input('important') important : boolean = false;
  @Output('changeImportance') changeImportant = new EventEmitter()
  
  updateImportant(){
    //pour l'input
    this.important = !this.important;
    //pour l'output
    this.changeImportant.emit(this.important); 
  }


  constructor() { }

  ngOnInit() {
  }

}
