import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  goalkeepers = [
    { name: 'Courtois', number: 1, position: 'Portero', image: 'path_to_image' },
    { name: 'Lunin', number: 13, position: 'Portero', image: 'path_to_image' },
    // Add more players
  ];

  defenders = [
    { name: 'Carvajal', number: 2, position: 'Defensa', image: 'path_to_image' },
    { name: 'E. Militao', number: 3, position: 'Defensa', image: 'path_to_image' },
    // Add more players
  ];

  midfielders = [
    { name: 'Bellingham', number: 5, position: 'Centrocampista', image: 'path_to_image' },
    { name: 'Kroos', number: 8, position: 'Centrocampista', image: 'path_to_image' },
    // Add more players
  ];

  forwards = [
    { name: 'Vinicius Jr', number: 7, position: 'Delantero', image: 'path_to_image' },
    { name: 'Rodrygo', number: 11, position: 'Delantero', image: 'path_to_image' },
    // Add more players
  ];

  technicalStaff = [
    { name: 'Carlo Ancelotti', position: 'Entrenador', image: 'path_to_image' },
    { name: 'Davide Ancelotti', position: 'Segundo entrenador', image: 'path_to_image' },
    // Add more staff
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
