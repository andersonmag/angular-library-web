import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  icon_name: string = "menu_open"

  constructor(private bookService: BookService, private router: Router,
    private loginService:LoginService) { }

  ngOnInit(): void {
  }

  deslogar() {
    this.loginService.deslogar()
    this.router.navigate(['/login'])
    .then(() => {
      window.location.reload();
    });
  }

  alterarNav(): void {
    var sidebar = document.getElementById("wrapper")

    if (sidebar.classList.contains("toggled")) {
      sidebar.classList.remove("toggled")
      this.icon_name = "menu_open"
    }
    else {
      sidebar.classList.add("toggled")
      this.icon_name = "menu"
    }
  }
}
