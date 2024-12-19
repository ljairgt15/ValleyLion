import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  goalkeepers = [
    { name: 'Courtois', number: 1, position: 'Portero', image: 'assets/logo.png' },
    { name: 'Lunin', number: 13, position: 'Portero', image: 'assets/logo.png' },
    // Add more players
  ];

  defenders = [
    { name: 'Carvajal', number: 2, position: 'Defensa', image: 'assets/logo.png' },
    { name: 'E. Militao', number: 3, position: 'Defensa', image: 'assets/logo.png' },
    // Add more players
  ];

  midfielders = [
    { name: 'Bellingham', number: 5, position: 'Centrocampista', image: 'assets/logo.png' },
    { name: 'Kroos', number: 8, position: 'Centrocampista', image: 'assets/logo.png' },
    // Add more players
  ];

  forwards = [
    { name: 'Vinicius Jr', number: 7, position: 'Delantero', image: 'passets/logo.png' },
    { name: 'Rodrygo', number: 11, position: 'Delantero', image: 'assets/logo.png' },
    // Add more players
  ];

  technicalStaff = [
    { name: 'Carlo Ancelotti', position: 'Entrenador', image: 'assets/logo.png' },
    { name: 'Davide Ancelotti', position: 'Segundo entrenador', image: 'assets/logo.png' },
    // Add more staff
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
