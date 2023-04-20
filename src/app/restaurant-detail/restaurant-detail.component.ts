import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      if (!isNaN(this.id)) {
        this.restaurantService.getRestaurantHttpById(this.id).subscribe((restaurant) => {
          this.restaurant = restaurant;
        }, (error) => {
          this.router.navigate(['restaurants']);
        });
      } else {
        this.router.navigate(['restaurants']);
      }
    });
  }

  goNext() {
    this.router.navigate(['restaurants', this.id + 1]);
  }

}
