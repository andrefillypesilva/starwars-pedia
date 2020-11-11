import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Vehicle } from 'src/app/models/interfaces/vehicle';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getVehicles(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>(`${environment.swapi}vehicles/`)
    .pipe(
      pluck('results'),
      map((vehicles: any[]) => {
        return vehicles.map((vehicle: Vehicle) => ({
          id: parseInt(vehicle.url.split('/')[5], 10),
          title: vehicle.name,
          description: `Vehicle Class: ${vehicle.vehicle_class}`,
          options: [`Passengers Ideal Quantity: ${vehicle.passengers}`],
          url: vehicle.url
        }));
      })
    );
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${environment.swapi}vehicles/${id}`);
  }
}
