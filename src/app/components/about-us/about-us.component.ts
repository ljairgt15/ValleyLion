import { Component, OnInit } from '@angular/core';
import { IValue } from 'src/app/models/value';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  summary:string="Nace un 9 de marzo en la comunidad de “Oyambarillo” al nor-oriente de la ciudad de Quito, capital del Ecuador, por sus creadores Saúl y Jair Gómez, quienes fundaron esta escuela de fútbol con el sueño de que un día alguien de su comunidad logre convertirse en un profesional y represente a Oyambarillo ante el mundo.";
  mission: string = "Nuestra misión es formar jóvenes futbolistas con disciplina, pasión y valores, brindándoles las herramientas necesarias para alcanzar su máximo potencial dentro y fuera de la cancha, mientras inspiran orgullo en nuestra comunidad.";
  vision: string = "En cinco años, nuestra visión es ser reconocidos como una escuela de fútbol líder en la formación de talentos, destacando por nuestro compromiso con el desarrollo integral de nuestros jugadores y por proyectar a Oyambarillo en el ámbito deportivo nacional e internacional.";
  values: IValue[] = [
    {
      title: 'Pasión por el Fútbol',
      description: 'Inculcamos amor y respeto por el deporte, enseñando que el esfuerzo y la dedicación son clave para alcanzar grandes metas.',
      iconUrl: 'assets/nosotros/pasion.png'
    },
    {
      title: 'Trabajo en Equipo',
      description: 'Fomentamos la colaboración y el espíritu de equipo, enseñando que los triunfos más grandes se alcanzan juntos.',
      iconUrl: 'assets/nosotros/equipo.png'
    },
    {
      title: 'Superación Personal',
      description: 'Motivamos a cada jugador a superar sus propios límites, mostrando que los sueños pueden hacerse realidad con disciplina y perseverancia.',
      iconUrl: 'assets/nosotros/superacion.png'
    },
    {
      title: 'Compromiso Social',
      description: 'Creamos un impacto positivo en nuestra comunidad, ofreciendo oportunidades para que los jóvenes de Oyambarillo alcancen su máximo potencial.',
      iconUrl: 'assets/nosotros/compromiso.png'
    },
    {
      title: 'Orgullo Local',
      description: 'Trabajamos para que el nombre de Oyambarillo sea sinónimo de talento y excelencia en el fútbol, demostrando que los sueños nacen en casa.',
      iconUrl: 'assets/nosotros/estadio.png'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
