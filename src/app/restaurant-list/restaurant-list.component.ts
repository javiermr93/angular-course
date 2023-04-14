import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurantList!: Restaurant[];

  constructor(private restaurantService: ServiceService) {}

  ngOnInit(): void {
    this.restaurantList = this.restaurantService.getRestaurants();
  }

}
