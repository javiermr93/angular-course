import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant_input!: Restaurant;

  hoverId: number = -1;

  constructor(private restaurantSv: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  mouseOver(id: number) {
    this.hoverId = id;
  }

  mouseOut() {
    this.hoverId = -1;
  }

  deleteRestaurant() {
    this.restaurantSv.deleteRestaurant(this.restaurant_input.id).subscribe(x => this.router.navigate(['restaurants']));
  }

  editRestaurant() {
    this.router.navigate(['restaurants/new']);
    this.restaurantSv.editRestaurantSubject.next(this.restaurant_input);
  }

}
