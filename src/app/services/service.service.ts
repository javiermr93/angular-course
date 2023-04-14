import { Injectable } from '@angular/core';
import { RESTAURANTS } from '../mocks/restaurants.mock';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getRestaurants(): Restaurant[] {
    return RESTAURANTS;
  }

  getRestaurantById(id: number): Restaurant {
    return RESTAURANTS[id - 1];
  }
}
