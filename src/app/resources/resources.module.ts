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
import { FilmDetailModalComponent } from './components/films/film-detail-modal/film-detail-modal.component';
import { PersonDetailModalComponent } from './components/people/person-detail-modal/person-detail-modal.component';
import { PlanetDetailModalComponent } from './components/planets/planet-detail-modal/planet-detail-modal.component';
import { SpeciesDetailModalComponent } from './components/species/species-detail-modal/species-detail-modal.component';
import { StarshipDetailModalComponent } from './components/starships/starship-detail-modal/starship-detail-modal.component';
import { VehicleDetailModalComponent } from './components/vehicles/vehicle-detail-modal/vehicle-detail-modal.component';

@NgModule({
  declarations: [
    PeopleComponent,
    FilmsComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PlanetsComponent,
    ResultSearchComponent,
    FilmDetailModalComponent,
    PersonDetailModalComponent,
    PlanetDetailModalComponent,
    SpeciesDetailModalComponent,
    StarshipDetailModalComponent,
    VehicleDetailModalComponent,
  ],
  imports: [CommonModule, ResourcesRoutingModule, SharedModule],
})
export class ResourcesModule {}
