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
      imageUrl: 'assets/logo.png',
    },
    {
      name: 'San Carlos JD PRO Events',
      position:'TERCER LUGAR',
      rivals:8,
      dates: ['Marzo 2021'],
      category: 'U10',
      imageUrl: 'assets/logo.png',
    },
    {
      name: 'Oyambarillo',
      position:'CAMPEÓN',
      rivals:8,
      dates: ['Diciembre 2022'],
      category: 'U8',
      imageUrl: 'assets/logo.png',
    },
    
    {
      name: 'Oyambarillo',
      position:'TERCER LUGAR',
      rivals:6,
      dates: ['Diciembre 2022'],
      category: 'U10',
      imageUrl: 'assets/logo.png',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
