import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'card-book',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() book: Book

  constructor() { }

  ngOnInit(): void {
  }

}
