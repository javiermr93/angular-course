import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.scss']
})
export class CreateRestaurantComponent implements OnInit {

  restaurantForm: FormGroup;
  restaurant!: Restaurant;

  constructor(
    private fb: FormBuilder,
    private restaurantService: ServiceService,
    private route: ActivatedRoute
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      neighborhood: ['', [Validators.required]],
      photograph: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cuisine_type: ['', [Validators.required]],
      latlng: this.fb.group({
        lat: ['', [Validators.required]],
        lng: ['', [Validators.required]]
      }),
      operating_hours: this.fb.group({
        Monday: ['', [Validators.required, this.validateOperatingHours]],
        Tuesday: ['', [Validators.required, this.validateOperatingHours]],
        Wednesday: ['', [Validators.required]],
        Thursday: ['', [Validators.required]],
        Friday: ['', [Validators.required]],
        Saturday: ['', [Validators.required]],
        Sunday: ['', [Validators.required]]
      })
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
    })

    this.restaurantForm.valueChanges.subscribe(values => {
      console.log(values);
    });
  }

  validateOperatingHours(control: AbstractControl): {[key: string]: any} | null {
    const pattern = '^\\d?\\d:\\d?\\d (pm|am) - \\d?\\d:\\d?\\d (pm|am)(, \\d?\\d:\\d?\\d (pm|am) - \\d?\\d:\\d?\\d (pm|am))?$';
    const regex = new RegExp(pattern);
    const value = control.value;
    const isValid = regex.test(value);

    if(isValid){
      return null;
    } else {
      return {'wrong_operating_hours': 'Wrong format'}
    }
  }

  submitForm() {
    this.restaurant = this.restaurantForm.value;

    let latitud = {
      lat: this.restaurantForm.value.latlng,
      lng: this.restaurantForm.value.latlng
    }

    delete this.restaurantForm.value.latlng;
    this.restaurant.name
    this.restaurant = this.restaurantForm.value;
    this.restaurant.latlng = latitud;

    // this.restaurantService.createRestaurant(this.restaurant).subscribe();
  }

}
