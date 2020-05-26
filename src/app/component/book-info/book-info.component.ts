import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit  {

  constructor(@Inject(DOCUMENT) document) { }


  ngOnInit(): void {
  }

  changeNav(): void {
    document.getElementById('wrapper').classList.contains('toggled') ? 
    document.getElementById('wrapper').classList.remove('toggled') :
    document.getElementById('wrapper').classList.add('toggled')
  }

}
