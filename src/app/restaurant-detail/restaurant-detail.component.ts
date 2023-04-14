import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  id: number = 0;
  restaurant!: Restaurant;

  constructor(private route: ActivatedRoute, private restaurantService: ServiceService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.restaurant = this.restaurantService.getRestaurantById(this.id);
  }

}
