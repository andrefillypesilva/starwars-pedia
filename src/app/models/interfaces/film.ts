import { Person } from './person';
import { Planet } from './planet';
import { Species } from './species';
import { Starship } from './starship';
import { Vehicle } from './vehicle';

export interface Film {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    species: Species[];
    starships: Starship[];
    vehicles: Vehicle[];
    characters: Person[];
    planets: Planet[];
    url: string;
}
