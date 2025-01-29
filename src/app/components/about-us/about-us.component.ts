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
      title: 'Disciplina',
      description: 'La base para alcanzar cualquier objetivo. Enseñamos a nuestros jugadores a mantener constancia y esfuerzo tanto en los entrenamientos como en su vida diaria, entendiendo que el éxito requiere dedicación y compromiso.',
      iconUrl: 'assets/nosotros/disciplina.png'
    },
    {
      title: 'Integridad',
      description: 'Promovemos la honestidad y la coherencia en cada acción. En Leones del Valle, buscamos formar personas que actúen con rectitud y principios en todas las áreas de su vida.',
      iconUrl: 'assets/nosotros/integridad.png'
    },
    {
      title: 'Respeto',
      description: 'Fomentamos el respeto hacia compañeros, rivales, entrenadores y uno mismo. Este valor es esencial para construir relaciones saludables y un entorno positivo donde todos puedan desarrollarse plenamente.',
      iconUrl: 'assets/nosotros/respeto.png'
    },
    {
      title: 'Excelencia',
      description: 'Buscamos formar jugadores que aspiren a la mejora constante, no solo en lo deportivo, sino también en su desarrollo personal. En Leones del Valle, excelencia significa dar siempre el máximo esfuerzo y superar los límites día a día.',
      iconUrl: 'assets/nosotros/excelencia.png'
    },
    {
      title: 'Pasión por el Fútbol',
      description: 'Inculcamos amor y respeto por el deporte, enseñando que el esfuerzo y la dedicación son clave para alcanzar grandes metas.',
      iconUrl: 'assets/nosotros/pasion.png'
    },
    {
      title: 'Trabajo en Equipo',
      description: 'El fútbol es un deporte colectivo, y en Leones del Valle promovemos la colaboración, la comunicación y el apoyo mutuo como herramientas fundamentales para alcanzar el éxito tanto dentro como fuera del campo.',
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
