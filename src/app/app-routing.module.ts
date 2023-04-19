import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { AccessGuard } from './guards/access.guard';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: '', component: HeaderComponent,
    canActivate: [AccessGuard],
    children: [
      {
        path: "restaurants/new", component: CreateRestaurantComponent,
        canActivate: [AccessGuard]
      },
      {
        path: "restaurants/:id", component: RestaurantDetailComponent,
        canActivate: [AccessGuard]
      },
      {
        path: "restaurants", component: RestaurantListComponent,
        canActivate: [AccessGuard]
      }
    ]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
