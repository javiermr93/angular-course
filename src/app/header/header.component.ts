import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkTheme: boolean = true;

  constructor(private renderer: Renderer2, private route: Router) { }

  ngOnInit(): void {}

  changeTheme() {
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, "light-theme");
      this.isDarkTheme = false;
    } else {
      this.renderer.removeClass(document.body, "light-theme");
      this.isDarkTheme = true;
    }
  }

  logOut() {
    localStorage.setItem("userLogged", "false");
    this.route.navigate(['/login']);
  }

}
