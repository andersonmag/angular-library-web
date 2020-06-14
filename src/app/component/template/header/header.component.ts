import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  q: string = 'soft'

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  teste(event): void {
    this.route.navigate(['/book/search/' + event.target.value])
  }

}
