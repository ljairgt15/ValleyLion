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
      name: 'Torneo Castro Loaiza',
      dates: ['11 de diciembre del año 2023'],
      category: 'U12',
      imageUrl: 'ruta_a_la_imagen',
    },
    {
      name: 'San Carlos JD PRO Events',
      timesWon: 1,
      dates: ['1955-56'],
      category: 'U11',
      imageUrl: 'ruta_a_la_imagen',
    },
    {
      name: 'Oyambarillo',
      timesWon: 1,
      dates: ['2022'],
      category: 'U8',
      imageUrl: 'ruta_a_la_imagen',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
