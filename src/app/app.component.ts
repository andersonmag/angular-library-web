import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  enable:boolean = false

  ngOnInit() {
    this.enable = location.pathname == '/login' 
                  || location.pathname == '/cadastro' ? false : true
  }
}
