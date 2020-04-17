import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetsService } from '../../services/planets.services';
@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html'
})
export class PlanetDetailComponent {
  planet: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
    private _planetsService: PlanetsService,
    private _router: Router) {

    this._activatedRoute.params.subscribe(params => {
      this.planet = this._planetsService.getPlanet(params['id']);
    });

  }

  getBack() {
    this._router.navigate(['/planets']);
  }

}
