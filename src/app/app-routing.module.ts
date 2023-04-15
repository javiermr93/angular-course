import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  {
    path: "restaurants/new", component: CreateRestaurantComponent
  },
  {
    path: "restaurants/:id", component: RestaurantDetailComponent
  },
  {
    path: "restaurants", component: RestaurantListComponent
  },
  {
    path: '', redirectTo: 'restaurants', pathMatch: 'full'
  },
  {
    path: '**', component: RestaurantListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
