import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ROUTING MODULE
import { ResourcesRoutingModule } from './resources-routing.module';

// COMPONENTS
import { PeopleComponent } from './components/people/people.component';
import { FilmsComponent } from './components/films/films.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SpeciesComponent } from './components/species/species.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SharedModule } from '../shared/shared.module';
import { ResultSearchComponent } from './components/result-search/result-search.component';

@NgModule({
  declarations: [PeopleComponent, FilmsComponent, StarshipsComponent, VehiclesComponent, SpeciesComponent, PlanetsComponent, ResultSearchComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    SharedModule
  ]
})
export class ResourcesModule { }
