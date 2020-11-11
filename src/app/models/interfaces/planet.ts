import { Person } from './person';
import { Film } from './film';

export interface Planet {
    id: number;
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: Person[];
    films: Film[];
    url: string;
}
