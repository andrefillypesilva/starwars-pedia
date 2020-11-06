import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {

  public vehicles$: Observable<ResultCard[]>;

  constructor(
    private readonly vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.vehicles$ = this.vehicleService.getVehicles();
  }

}
