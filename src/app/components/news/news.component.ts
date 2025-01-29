import { Component, OnInit,Input } from '@angular/core';
import { INews } from 'src/app/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() numNews: number = 0;

  constructor() { }
  newsList: INews[] = [
    {
      title: 'LEONES PRO, entrenamiento a alto nivel',
      description: 'FORMATIVAS PROFESIONALES',
      imageUrl: 'assets/index/equipo2.jpg',
      date: 'mayo 13, 2024'
    },
    {
      title: 'COMUNICADO DE PRENSA: Juan Tuquerrez (13) al Vinotinto FC',
      description: 'FORMATIVAS PROFESIONALES',
      imageUrl: 'assets/news/juanitoNacho.jpg',
      date: 'mayo 13, 2024'
    },
    {
      title: 'COMUNICADO DE PRENSA: Damián Gómez (13) al Vinotinto FC',
      description: 'FORMATIVAS PROFESIONALES',
      imageUrl: 'assets/news/damianVinotinto.jpg',
      date: 'mayo 13, 2024'
    },
    {
      title: 'COMUNICADO DE PRENSA: Damián Gómez (13) al Vinotinto FC',
      description: 'FORMATIVAS PROFESIONALES',
      imageUrl: 'assets/news/damianVinotinto.jpg',
      date: 'mayo 13, 2024'
    },
    {
      title: 'COMUNICADO DE PRENSA: Juan Tuquerrez (13) al Vinotinto FC',
      description: 'FORMATIVAS PROFESIONALES',
      imageUrl: 'assets/news/juanitoNacho.jpg',
      date: 'mayo 13, 2024'
    },
    {
      title: 'COMUNICADO DE PRENSA: Damián Gómez (13) al Vinotinto FC',
      description: 'FORMATIVAS PROFESIONALES',
      imageUrl: 'assets/news/damianVinotinto.jpg',
      date: 'mayo 13, 2024'
    },
  ];

  displayedNews: INews[] = [];


  ngOnInit(): void {
    if(this.numNews!=0)
      this.displayedNews = this.newsList.slice(0, this.numNews);
    else
      this.displayedNews = this.newsList
  }

}
