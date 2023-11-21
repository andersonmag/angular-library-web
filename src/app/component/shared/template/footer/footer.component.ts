import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date: number
  icones = [{
    class: '',
    link: ''
  }]

  constructor() { }

  ngOnInit(): void {
    this.inserirInformacoes()
  }

  inserirInformacoes() {
    this.date = new Date().getFullYear()
    this.icones = [{
      class: "devicon-github-plain colored icone",
      link: "https://github.com/andersonmag/angular-library-web"
    },
    {
      class: "devicon-heroku-original colored icone ml-1",
      link: "https://library-angjs.herokuapp.com/"
    }]
  }

}
