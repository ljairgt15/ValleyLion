import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/models/title';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.css']
})
export class TrophiesComponent implements OnInit {
  titles: Title[] = [
    {
      name: 'Liga Parroquial Puembo',
      position:'CAMPEÓN',
      rivals:6,
      dates: ['Enero 2023'],
      category: 'U12',
      imageUrl: 'assets/logo.png',
    },
    {
      name: 'Torneo Castro Loaiza',
      position:'SUBCAMPEÓN',
      rivals:8,
      dates: ['Diciembre 2023'],
      category: 'U10',
      imageUrl: 'assets/trophies/2-sub10-ecuavalle.jpg',
    },
    
    {
      name: 'Ecuavalle Cup',
      position:'SUBCAMPEÓN',
      rivals:8,
      dates: ['Diciembre 2024'],
      category: 'U10',
      imageUrl: 'assets/trophies/2-sub10-ecuavalle.jpg',
    },
    {
      name: 'San Carlos JD PRO Events',
      position:'TERCER LUGAR',
      rivals:8,
      dates: ['Marzo 2021'],
      category: 'U10',
      imageUrl: 'assets/trophies/2-sub10-ecuavalle.jpg',

    },
    {
      name: 'Oyambarillo',
      position:'CAMPEÓN',
      rivals:8,
      dates: ['Diciembre 2022'],
      category: 'U8',
      imageUrl: 'assets/trophies/1-sub8-oyam.jpg',

    },
    
    {
      name: 'Oyambarillo',
      position:'TERCER LUGAR',
      rivals:6,
      dates: ['Diciembre 2022'],
      category: 'U10',
      imageUrl: 'assets/trophies/3-sub10-oyam.jpg',

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
