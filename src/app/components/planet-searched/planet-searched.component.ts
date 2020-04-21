import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlanetsService, Planet } from '../../services/planets.services';
@Component({
  selector: 'app-planet-searched',
  templateUrl: './planet-searched.component.html',
  styleUrls: ['./planet-searched.component.css']
})
export class PlanetSearchedComponent implements OnInit {
  planetsArr: Planet[] = [];
  searchText: string;
  constructor(private _planetsService: PlanetsService,
    private _activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.searchText = params['searchText'];
      this.planetsArr = this._planetsService.searchPlanets(this.searchText);
    });
  }

}
