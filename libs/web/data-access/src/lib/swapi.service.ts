import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from './types/response.type';
import { Starship } from './types/starship.type';
import { Planet } from './types/planet.type';
import { People } from './types/people.type';

@Injectable({ providedIn: 'root' })
export class SwapiService {
  private readonly http = inject(HttpClient);

  private apiRoutes = {
    planets: 'https://swapi.dev/api/planets',
    starships: 'https://swapi.dev/api/starships',
    people: 'https://swapi.dev/api/people',
  };

  getStarships() {
    return this.http.get<ResponseData<Starship>>(`${this.apiRoutes.starships}`);
  }

  getPlanets() {
    return this.http.get<ResponseData<Planet>>(`${this.apiRoutes.planets}`);
  }

  getPeople() {
    return this.http.get<ResponseData<People>>(`${this.apiRoutes.people}`);
  }

  getPlanet(id: string) {
    return this.http.get<Planet>(`${this.apiRoutes.planets}/${id}`);
  }

  getPerson(id: string) {
    return this.http.get<People>(`${this.apiRoutes.people}/${id}`);
  }

  getStarship(id: string) {
    return this.http.get<People>(`${this.apiRoutes.starships}/${id}`);
  }
}
