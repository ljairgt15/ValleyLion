import { Component, OnInit } from '@angular/core';
import { IValue } from 'src/app/models/value';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  summary:string="Nace un 9 de marzo del 2021 en la comunidad de “Oyambarillo” al Nortoriente de la ciudad de quito capital del ecuador, por sus creadores Saúl y Jair Gómez, actuales administradores ambos con gran experiencia en el ámbito futbolístico.";
  mission: string = "Formar integralmente a niños y jóvenes a través del fútbol, ofreciendo una enseñanza deportiva de excelencia que fomente valores como la disciplina. Utilizamos el deporte como herramienta para desarrollar habilidades deportivas, emocionales y sociales en un entorno inclusivo y profesional, donde los sueños y talentos de nuestros jugadores se conviertan en oportunidades para destacar como deportistas y como personas, tanto individualmente como en equipo.";
  vision: string = "Ser reconocidos a nivel nacional como una academia que forma no solo futbolistas de alto rendimiento, sino también ciudadanos ejemplares. Queremos liderar el camino en la innovación y la enseñanza del fútbol base, inspirando a futuras generaciones a alcanzar su máximo potencial.";
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
