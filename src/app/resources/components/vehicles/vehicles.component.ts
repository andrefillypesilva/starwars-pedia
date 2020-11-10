import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleDetailModalComponent } from './vehicle-detail-modal/vehicle-detail-modal.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {

  public vehicles$: Observable<ResultCard[]>;

  constructor(
    private readonly vehicleService: VehicleService,
    private readonly modalServices: NgbModal
  ) { }

  ngOnInit(): void {
    this.vehicles$ = this.vehicleService.getVehicles();
  }

  onOpenVehicle(): void {
    const modal = this.modalServices.open(VehicleDetailModalComponent);
    modal.componentInstance.object = {
      name: 'Vehicle',
      model: 'AUTO',
      vehicle_class: '124',
      manufacturer: '54',
      length: '456',
      cost_in_credits: '456',
      crew: '666666',
      passengers: '567',
      max_atmosphering_speed: '1000',
      cargo_capacity: '1222',
      consumables: '76'
    };
  }

}
