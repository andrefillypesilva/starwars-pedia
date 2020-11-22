import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// RESOLVERS
import { FilmsResolver } from '../resources/resolvers/films.resolver';
import { PeopleResolver } from '../resources/resolvers/people.resolver';
import { PlanetsResolver } from '../resources/resolvers/planets.resolver';
import { SpeciesResolver } from '../resources/resolvers/species.resolver';
import { StarshipsResolver } from '../resources/resolvers/starships.resolver';
import { VehiclesResolver } from '../resources/resolvers/vehicles.resolver';

// COMPONENTS
import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
    {
        path: '',
        component: ResultSearchComponent
    },
    {
        path: 'people',
        resolve: { people: PeopleResolver },
        component: PeopleComponent
    },
    {
        path: 'films',
        resolve: { films: FilmsResolver },
        component: FilmsComponent
    },
    {
        path: 'starships',
        resolve: { starships: StarshipsResolver },
        component: StarshipsComponent
    },
    {
        path: 'vehicles',
        resolve: { vehicles: VehiclesResolver },
        component: VehiclesComponent
    },
    {
        path: 'species',
        resolve: { species: SpeciesResolver },
        component: SpeciesComponent
    },
    {
        path: 'planets',
        resolve: { planets: PlanetsResolver },
        component: PlanetsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResourcesRoutingModule { }
