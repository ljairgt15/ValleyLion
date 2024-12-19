import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamCategory } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private categories: TeamCategory[] = [
    {
      id: 1,
      name: 'U6',
      players: [
        { id: 1, name: 'John Doe', number: 1, position: 'Goalkeeper', image: 'assets/logo.png' },
        // Más jugadores aquí
      ],
    },
    {
      id: 2,
      name: 'U8',
      players: [
        { id: 2, name: 'Jane Smith', number: 5, position: 'Defender', image: 'assets/logo.png' },
        // Más jugadores aquí
      ],
    },
    {
      id: 3,
      name: 'U10',
      players: [
        { id: 2, name: 'Jane Smith', number: 5, position: 'Defender', image: 'assets/logo.png' },
        // Más jugadores aquí
      ],
    },
    {
      id: 4,
      name: 'U12',
      players: [
        { id: 2, name: 'Jane Smith', number: 5, position: 'Defender', image: 'assets/logo.png' },
        // Más jugadores aquí
      ],
    },
    {
      id: 5,
      name: 'U14',
      players: [
        { id: 2, name: 'Jane Smith', number: 5, position: 'Defender', image: 'assets/logo.png' },
        // Más jugadores aquí
      ],
    },
  ];

  getCategories(): Observable<TeamCategory[]> {
    return of(this.categories);
  }

  getCategoryById(id: number): Observable<TeamCategory | undefined> {
    return of(this.categories.find((category) => category.id === id));
  }
}
