import { Component, OnInit } from '@angular/core';
import { IValue } from 'src/app/models/value';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  summary:string="Nace un 9 de marzo en la comunidad de “Oyambarillo” al nor-oriente de la ciudad de quito capital del ecuador, por sus creadores Saúl y Jair gómez actuales administradores ambos con gran experiencia en el ámbito futbolístico.";
  mission: string = "Nuestra misión es apoyar a las empresas en crear valor para tus clientes y ventajas competitivas mediante el asesoramiento tecnológico para afrontar la transformación digital.";
  vision: string = "En tres años, nuestra visión es consolidarnos como líderes en el mercado de servicios tecnológicos, destacando nuestra esencia innovadora.";
  values: IValue[] = [
    {
      title: 'Integridad',
      description: 'Nos adherimos a los más altos estándares éticos en todas nuestras operaciones, asegurando transparencia y honestidad en nuestras interacciones.',
      iconUrl: 'assets/img/nosotros/integridad.png'
    },
    {
      title: 'Innovación',
      description: 'Estamos comprometidos con la creación de soluciones vanguardistas que anticipen y satisfagan las necesidades cambiantes del mercado.',
      iconUrl: 'assets/img/nosotros/innovacion-servicio.png'
    },
    {
      title: 'Responsabilidad Social',
      description: 'Contribuimos activamente al bienestar de las comunidades donde operamos, enfocándonos en el desarrollo sostenible y la inclusión.',
      iconUrl: 'assets/img/nosotros/sociedad-nosotros.png'
    },
    {
      title: 'Servicio al Cliente',
      description: 'Garantizamos una experiencia excepcional para cada cliente a través de un servicio personalizado y respuestas ágiles a tus necesidades.',
      iconUrl: 'assets/img/nosotros/serviciocliente-servicio.png',
      delay: '0.2s'
    },
    {
      title: 'Diversidad',
      description: 'Valoramos y fomentamos la diversidad dentro de nuestra empresa, creando un ambiente inclusivo que respeta y celebra las diferencias individuales.',
      iconUrl: 'assets/img/nosotros/diversidad-nosotros.png',
      delay: '0.2s'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
