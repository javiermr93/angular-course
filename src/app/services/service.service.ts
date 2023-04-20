import { Injectable } from '@angular/core';
import { RESTAURANTS } from '../mocks/restaurants.mock';
import { Restaurant } from '../models/restaurant.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  editRestaurantSubject = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) {}

  getRestaurants(): Restaurant[] {
    return RESTAURANTS;
  }

  getRestaurantById(id: number): Restaurant {
    return RESTAURANTS[id - 1];
  }

  getRestaurantHttp(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('http://107.191.63.129:8000/restaurants/');
  }

  getRestaurantHttpById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`http://107.191.63.129:8000/restaurants/${id}/`);
  }

  createRestaurant(data: Restaurant) {
    return this.http.post<Restaurant>('http://107.191.63.129:8000/restaurants/', data)
  }

  editRestaurant(id: number, data: Restaurant) {
    return this.http.patch<Restaurant>(`http://107.191.63.129:8000/restaurants/${id}/`, data)
  }

  deleteRestaurant(id: number) {
    return this.http.delete<Restaurant>(`http://107.191.63.129:8000/restaurants/${id}/`);
  }
}
