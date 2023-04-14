export class Restaurant {
  id!: number;
  name!: string;
  neighborhood!: string;
  photograph!: string;
  address!: string;
  latlng!: LatLng;
  cuisine_type!: string;
  operating_hours!: OperatingHours;
  reviews!: Review[];
}

class OperatingHours {
  Monday!: string;
  Tuesday!: string;
  Wednesday!: string;
  Thursday!: string;
  Friday!: string;
  Saturday!: string;
  Sunday!: string;
}

class LatLng {
  lat!: number;
  lng!: number;
}

class Review {
  name!: string;
  date!: string;
  rating!: number;
  comments!: string;
}


// class prueba {

//   ejemplo: string;
//   puedequesi?: string;
//   obligatorio!: string;
//   obligatorio2: string;

//   constructor(ejemplo: string, obligatorio2: string) {
//     this.ejemplo = ejemplo;
//     this.obligatorio2 = obligatorio2;
//   }

// }
