import { Component, OnInit,Input } from '@angular/core';
import { INews } from 'src/app/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() numNews: number = 3;

  constructor() { }
  newsList: INews[] = [
    {
      title: 'Nuestros procesos siguen logrando títulos y experiencias',
      description: 'Procesos',
      imageUrl: 'assets/index/equipo2.jpg',
      date: 'mayo 13, 2024'
    },
    {
      title: 'COMUNICADO DE PRENSA: Juan Tuquerrez (13) al Club Deportivo El Nacional',
      description: 'Formativas',
      imageUrl: 'assets/news/juanitoNacho.jpg',
      date: 'mayo 13, 2024'
    },
    {
      title: 'Independiente del Valle inauguró el primer estadio de Latinoamérica para un equipo femenino: Dragonas IDV',
      description: 'Dragonas',
      imageUrl: 'assets/index/equipo.jpg',
      date: 'mayo 13, 2024'
    },
    {
      title: 'COMUNICADO DE PRENSA: Juan Tuquerrez (13) al Club Deportivo El Nacional',
      description: 'Formativas',
      imageUrl: 'assets/index/equipo2.jpg',
      date: 'mayo 13, 2024'
    },
  ];

  displayedNews: INews[] = [];


  ngOnInit(): void {
    this.displayedNews = this.newsList.slice(0, this.numNews);
  }

}
