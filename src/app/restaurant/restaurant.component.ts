import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant_input!: Restaurant;

  hoverId: number = -1;

  constructor() {}

  ngOnInit(): void {}

  mouseOver(id: number) {
    this.hoverId = id;
  }

  mouseOut() {
    this.hoverId = -1;
  }

}
