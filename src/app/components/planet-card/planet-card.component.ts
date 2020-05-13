import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {
@Input() planet: any = {};
@Input() idx: number;
@Output() planetSelected: EventEmitter<number>;
  constructor(private _router: Router) {

    this.planetSelected = new EventEmitter();

   }

  ngOnInit() {
  }

  showPlanet() {
      this._router.navigate(['/planet-detail', this.idx]);
  }

}
