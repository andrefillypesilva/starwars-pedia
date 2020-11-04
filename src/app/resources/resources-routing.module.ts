import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'people'
    },
    {
        path: 'people',
        component: PeopleComponent
    },
    {
        path: 'films',
        component: FilmsComponent
    },
    {
        path: 'starships',
        component: StarshipsComponent
    },
    {
        path: 'vehicles',
        component: VehiclesComponent
    },
    {
        path: 'species',
        component: SpeciesComponent
    },
    {
        path: 'planets',
        component: PlanetsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResourcesRoutingModule { }
