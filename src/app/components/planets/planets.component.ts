import { Component, OnInit } from '@angular/core';
import { PlanetsService, Planet } from '../../services/planets.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html'
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  constructor(private _planetsService: PlanetsService,
    private _router: Router) {
  }

  ngOnInit() {
    this.planets = this._planetsService.getPlanets();
    console.log(this.planets)

  }

  showPlanet(idx: number) {
    this._router.navigate(['/planet-detail', idx]);
  }

}
