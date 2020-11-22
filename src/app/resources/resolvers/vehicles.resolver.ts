import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { VehicleService } from '../services/vehicle.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesResolver implements Resolve<ResultCard[]> {

  constructor(
    private readonly vehicleService: VehicleService
  ) { }

  resolve(): Observable<ResultCard[]> {
      return this.vehicleService.getVehicles();
  }

}
