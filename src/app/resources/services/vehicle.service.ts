import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Vehicle } from 'src/app/models/interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getVehicles(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>('assets/mocks/vehicles.json')
    .pipe(
      map((vehicles: any[]) => {
        return vehicles.map((vehicle: Vehicle) => ({
          id: vehicle.id,
          title: vehicle.name,
          description: `Vehicle Class: ${vehicle.vehicle_class}`,
          options: [`Passengers Ideal Quantity: ${vehicle.passengers}`],
          url: vehicle.url
        }));
      })
    );
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>('assets/mocks/vehicles.json');
  }
}
