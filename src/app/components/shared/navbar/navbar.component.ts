import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router) { }

  ngOnInit() {
  }

  searchPlanet(searchText: string) {
    this._router.navigate(['/planet-searched', searchText]);
  }
}
