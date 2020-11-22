import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Vehicle } from 'src/app/models/interfaces/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleDetailModalComponent } from './vehicle-detail-modal/vehicle-detail-modal.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {

  public vehicles: ResultCard[];

  constructor(
    private readonly vehicleService: VehicleService,
    private readonly modalServices: NgbModal,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.vehicles = this.activatedRoute.snapshot.data.vehicles;
  }

  onOpenVehicle(id: number): void {
    this.vehicleService.getVehicleById(id).subscribe((vehicle: Vehicle) => {
      const modal = this.modalServices.open(VehicleDetailModalComponent);
      modal.componentInstance.object = {
        name: vehicle.name,
        model: vehicle.model,
        vehicle_class: vehicle.vehicle_class,
        manufacturer: vehicle.manufacturer,
        length: vehicle.length,
        cost_in_credits: vehicle.cost_in_credits,
        crew: vehicle.crew,
        passengers: vehicle.passengers,
        max_atmosphering_speed: vehicle.max_atmosphering_speed,
        cargo_capacity: vehicle.cargo_capacity,
        consumables: vehicle.consumables
      };
    });
  }

}
