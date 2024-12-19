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
      imageUrl: 'assets/logo.png',
    },
    {
      name: 'San Carlos JD PRO Events',
      timesWon: 1,
      dates: ['1955-56'],
      category: 'U11',
      imageUrl: 'assets/logo.png',
    },
    {
      name: 'Oyambarillo',
      timesWon: 1,
      dates: ['2022'],
      category: 'U8',
      imageUrl: 'assets/logo.png',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
