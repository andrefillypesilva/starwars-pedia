import { Film } from './film';
import { Species } from './species';
import { Starship } from './starship';
import { Vehicle } from './vehicle';

export interface Person {
    id: number;
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: Film[];
    species: Species[];
    starships: Starship[];
    vehicles: Vehicle[];
    url: string;
}
