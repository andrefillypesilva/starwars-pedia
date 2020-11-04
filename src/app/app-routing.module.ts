import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    /********************
     * Lazy Loaded
    ********************/
    {
        path: 'resources',
        loadChildren: () => import('./resources/resources.module').then((m) => m.ResourcesModule),
    },

    /********************
     * Eager Loaded
    ********************/
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'not-found'
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
