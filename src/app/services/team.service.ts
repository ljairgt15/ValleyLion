import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamCategory } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private categories: TeamCategory[] = [
    {
      id: 1,
      name: 'U7',
      players: [
        { id: 1, name: 'Dylan Mateo Castro Pincay', number: 1, position: 'Player', image: 'assets/players/sub7/Castro Dylan/IMG_1.jpg' },
        { id: 2, name: 'Jheral Gael Gomez Columba', number: 2, position: 'Player', image: 'assets/players/sub7/Gomez Jheral/IMG_2.jpg' },
        { id: 3, name: 'Jose Andres Monta Valenzuela', number: 3, position: 'Player', image: 'assets/players/sub7/Monta Jose/IMG_3.jpg' },
        { id: 4, name: 'Gabriel Nicolas Quilca Llamatumbi', number: 4, position: 'Player', image: 'assets/players/sub7/Quilca Gabriel/IMG_4.jpg' },
      ],
    },
    {
      id: 2,
      name: 'SUB 8',
      players: [
        { id: 1, name: 'Eithan David Aguirre Bejarano', number: 1, position: 'Player', image: 'assets/players/Sub-8/Aguirre Eithan/IMG_6210.JPG' },
        { id: 2, name: 'Alan Ivan Conde Niachimba', number: 2, position: 'Player', image: 'assets/players/Sub-8/Conde Alan/IMG_6236.JPG' },
        { id: 3, name: 'Pedro Javier Cruz Anrango', number: 3, position: 'Player', image: 'assets/players/Sub-8/CruzPedro/IMG_6246.JPG' },
        { id: 4, name: 'Pablo Andres Diaz Tene', number: 4, position: 'Player', image: 'assets/players/Sub-8/Diaz Pablo/IMG_4.jpg' },
        { id: 5, name: 'Anie Salome Gordillo Flores', number: 5, position: 'Player', image: 'assets/players/Sub-8/Gordillo Anie/IMG_5.jpg' },
        { id: 6, name: 'Cristopher Benjamin Mangia Paillacho', number: 6, position: 'Player', image: 'assets/players/Sub-8/Mangia Cristopher/IMG_6.jpg' },
        { id: 7, name: 'Oliver Damian Paillacho Sinchigalo', number: 7, position: 'Player', image: 'assets/players/Sub-8/Paillacho Oliver/IMG_7.jpg' },
        { id: 8, name: 'Thiago Gael Sornoza Dominguez', number: 8, position: 'Player', image: 'assets/players/Sub-8/Sornoza Thiago/IMG_8.jpg' },
        { id: 9, name: 'Matias Ismael Tejada Castro', number: 9, position: 'Player', image: 'assets/players/Sub-8/Tejada Matias/IMG_9.jpg' },
      ],
    },
    {
      id: 3,
      name: 'U9',
      players: [
        { id: 1, name: 'Danna Gissel Chacha Espinosa', number: 1, position: 'Player', image: 'assets/players/sub9/Chacha Danna/IMG_1.jpg' },
        { id: 2, name: 'Marlon Ismael Gavilanez Chulli', number: 2, position: 'Player', image: 'assets/players/sub9/Gavilanez Marlon/IMG_2.jpg' },
        { id: 3, name: 'Mileth Katherine Paillacho Conde', number: 3, position: 'Player', image: 'assets/players/sub9/Paillacho Mileth/IMG_3.jpg' },
        { id: 4, name: 'Steven Jhosue Simbaña Cuichan', number: 4, position: 'Player', image: 'assets/players/sub9/Simbaña Steven/IMG_4.jpg' },
        { id: 5, name: 'Dereck Mateo Hidalgo Espin', number: 5, position: 'Player', image: 'assets/players/sub9/Hidalgo Dereck/IMG_5.jpg' },
      ],
    },
    {
      id: 4,
    name: 'U10',
    players: [
      { id: 1, name: 'Elian Sebastian Alvarado Llamatumbi', number: 1, position: 'Player', image: 'assets/players/sub10/Alvarado Elian/IMG_1.jpg' },
      { id: 2, name: 'Jeicob Leoney Chasi Perez', number: 2, position: 'Player', image: 'assets/players/sub10/Chasi Jeicob/IMG_2.jpg' },
      { id: 3, name: 'Freddy Elian Chiriboga Davalos', number: 3, position: 'Player', image: 'assets/players/sub10/Chiriboga Freddy/IMG_3.jpg' },
      { id: 4, name: 'Sarahi Mayte Gordillo Flores', number: 4, position: 'Player', image: 'assets/players/sub10/Gordillo Sarahi/IMG_4.jpg' },
      { id: 5, name: 'Angel Matias Guagalango Pilca', number: 5, position: 'Player', image: 'assets/players/sub10/Guagalango Angel/IMG_5.jpg' },
      { id: 6, name: 'Dorian Jahir Mejia Pazmiño', number: 6, position: 'Player', image: 'assets/players/sub10/Mejia Dorian/IMG_6.jpg' },
      { id: 7, name: 'Zoey Monserrath Muñoz Mejia', number: 7, position: 'Player', image: 'assets/players/sub10/Muñoz Zoey/IMG_7.jpg' },
      { id: 8, name: 'Iker Adrian Puma Ichau', number: 8, position: 'Player', image: 'assets/players/sub10/Puma Iker/IMG_8.jpg' },
      { id: 9, name: 'Christopher Adrian Villamarin Mora', number: 9, position: 'Player', image: 'assets/players/sub10/Villamarin Christopher/IMG_9.jpg' },
    ],
    },

    {
      id: 5,
      name: 'U11',
      players: [
        { id: 1, name: 'Maximiliano Xavier Bravo Perez', number: 1, position: 'Player', image: 'assets/players/sub11/Bravo Maximiliano/IMG_1.jpg' },
        { id: 2, name: 'Jaime Vladimir Cachago Tipan', number: 2, position: 'Player', image: 'assets/players/sub11/Cachago Jaime/IMG_2.jpg' },
        { id: 3, name: 'Sisary Nohelya Caiza Galarza', number: 3, position: 'Player', image: 'assets/players/sub11/Caiza Sisary/IMG_3.jpg' },
        { id: 4, name: 'Santiago Agustin Diaz Tene', number: 4, position: 'Player', image: 'assets/players/sub11/Diaz Santiago/IMG_4.jpg' },
        { id: 5, name: 'Jaime Alexander Gomez Carpio', number: 5, position: 'Player', image: 'assets/players/sub11/Gomez Jaime/IMG_5.jpg' },
        { id: 6, name: 'Jeremy Gabriel Gomez Torres', number: 6, position: 'Player', image: 'assets/players/sub11/Gomez Jeremy/IMG_6.jpg' },
        { id: 7, name: 'Javier Nicolas Leon Toapanta', number: 7, position: 'Player', image: 'assets/players/sub11/Leon Javier/IMG_7.jpg' },
        { id: 8, name: 'Derlis Leonel Paillacho Cevallos', number: 8, position: 'Player', image: 'assets/players/sub11/Paillacho Derlis/IMG_8.jpg' },
      ],
    },
    {
      id: 6,
      name: 'U12',
      players: [
        { id: 1, name: 'Jordan Antonio Barreto Tubay', number: 1, position: 'Player', image: 'assets/players/sub12/Barreto Jordan/IMG_1.jpg' },
        { id: 2, name: 'Ariel Sebastian Coro Criollo', number: 2, position: 'Player', image: 'assets/players/sub12/Coro Ariel/IMG_2.jpg' },
        { id: 3, name: 'Matias Damian Estevez Navarro', number: 3, position: 'Player', image: 'assets/players/sub12/Estevez Matias/IMG_3.jpg' },
        { id: 4, name: 'Jeremy Sebastian Remache Cuello', number: 4, position: 'Player', image: 'assets/players/sub12/Remache Jeremy/IMG_4.jpg' },
        { id: 5, name: 'Danthe Jareth Sornoza Zambrano', number: 5, position: 'Player', image: 'assets/players/sub12/Sornoza Danthe/IMG_5.jpg' },
        { id: 6, name: 'Cristopher Velez Palma', number: 6, position: 'Player', image: 'assets/players/sub12/Velez Cristopher/IMG_6.jpg' },
      ],
    },
    {
      id: 7,
      name: 'U13',
      players: [
        { id: 1, name: 'Alexis Mateo Andino Chicaiza', number: 1, position: 'Player', image: 'assets/players/sub13/Andino Alexis/IMG_1.jpg' },
        { id: 2, name: 'Alexander Damian Gomez Paillacho', number: 2, position: 'Player', image: 'assets/players/sub13/Gomez Alexander/IMG_2.jpg' },
        { id: 3, name: 'Dominick Adrian Nalvay Gomez', number: 3, position: 'Player', image: 'assets/players/sub13/Nalvay Dominick/IMG_3.jpg' },
        { id: 4, name: 'David Alejandro Proaño Estevez', number: 4, position: 'Player', image: 'assets/players/sub13/Proaño David/IMG_4.jpg' },
        { id: 5, name: 'Santiago Jasniel Quishpe Guerra', number: 5, position: 'Player', image: 'assets/players/sub13/Quishpe Santiago/IMG_5.jpg' },
        { id: 6, name: 'Marco Adrian Quishpi Remache', number: 6, position: 'Player', image: 'assets/players/sub13/Quishpi Marco/IMG_6.jpg' },
        { id: 7, name: 'Juan Ignacio Tuquerrez Pillajo', number: 7, position: 'Player', image: 'assets/players/sub13/Tuquerrez Juan/IMG_7.jpg' },
      ],
    },
    {
      id: 8,
      name: 'U14',
      players: [
        { id: 1, name: 'Brad Jossuha Bajana Mite', number: 1, position: 'Player', image: 'assets/players/sub14/Bajana Brad/IMG_1.jpg' },
        { id: 2, name: 'Jostin Javier Fernandez Tejada', number: 2, position: 'Player', image: 'assets/players/sub14/Fernandez Jostin/IMG_2.jpg' },
        { id: 3, name: 'Fernando Jose Gomez Aguinda', number: 3, position: 'Player', image: 'assets/players/sub14/Gomez Fernando/IMG_3.jpg' },
        { id: 4, name: 'Dealan Jhesith Gomez Columba', number: 4, position: 'Player', image: 'assets/players/sub14/Gomez Dealan/IMG_4.jpg' },
        { id: 5, name: 'Johan Osmany Salinas Lapo', number: 5, position: 'Player', image: 'assets/players/sub14/Salinas Johan/IMG_5.jpg' },
        { id: 6, name: 'Mesias Roberto Torres Sandoval', number: 6, position: 'Player', image: 'assets/players/sub14/Torres Mesias/IMG_6.jpg' },
        { id: 7, name: 'Alexander Christopher Tovar Alvarado', number: 7, position: 'Player', image: 'assets/players/sub14/Tovar Alexander/IMG_7.jpg' },
      ],
    },
    {
      id: 9,
      name: 'U16',
      players: [
        { id: 1, name: 'Camila Alejandra Benalcazar Gomez', number: 1, position: 'Player', image: 'assets/players/sub16/Benalcazar Camila/IMG_1.jpg' },
        { id: 2, name: 'Edison Alexander Cuti Quilumba', number: 2, position: 'Player', image: 'assets/players/sub16/Cuti Edison/IMG_2.jpg' },
        { id: 3, name: 'Juan Ariel Jimenez Calo', number: 3, position: 'Player', image: 'assets/players/sub16/Jimenez Juan/IMG_3.jpg' },
        { id: 4, name: 'Anderson Ismael Quiranza Guajan', number: 4, position: 'Player', image: 'assets/players/sub16/Quiranza Anderson/IMG_4.jpg' },
        { id: 5, name: 'Jostyn Alexis Salinas Lapo', number: 5, position: 'Player', image: 'assets/players/sub16/Salinas Jostyn/IMG_5.jpg' },
        { id: 6, name: 'Jeremy Geovanny Vera Navarrete', number: 6, position: 'Player', image: 'assets/players/sub16/Vera Jeremy/IMG_6.jpg' },
        { id: 7, name: 'Andres Sebastian Paillacho Vasquez', number: 7, position: 'Player', image: 'assets/players/sub16/Paillacho Andres/IMG_7.jpg' },
      ],
    },
    {
      id: 10,
      name: 'SAN CARLOS',
      players: [
        { id: 1, name: 'Brad Jossuha Bajana Mite', number: 1, position: 'Player', image: 'assets/players/sub14/Bajana Brad/IMG_1.jpg' },
        { id: 2, name: 'Jostin Javier Fernandez Tejada', number: 2, position: 'Player', image: 'assets/players/sub14/Fernandez Jostin/IMG_2.jpg' },
        { id: 3, name: 'Fernando Jose Gomez Aguinda', number: 3, position: 'Player', image: 'assets/players/sub14/Gomez Fernando/IMG_3.jpg' },
        { id: 4, name: 'Dealan Jhesith Gomez Columba', number: 4, position: 'Player', image: 'assets/players/sub14/Gomez Dealan/IMG_4.jpg' },
        { id: 5, name: 'Johan Osmany Salinas Lapo', number: 5, position: 'Player', image: 'assets/players/sub14/Salinas Johan/IMG_5.jpg' },
        { id: 6, name: 'Mesias Roberto Torres Sandoval', number: 6, position: 'Player', image: 'assets/players/sub14/Torres Mesias/IMG_6.jpg' },
        { id: 7, name: 'Alexander Christopher Tovar Alvarado', number: 7, position: 'Player', image: 'assets/players/sub14/Tovar Alexander/IMG_7.jpg' },
      ],
    },
  ];
  

  getCategories(): Observable<TeamCategory[]> {
    return of(this.categories);
  }

  getCategoryById(id: number): Observable<TeamCategory | undefined> {
    return of(this.categories.find((category) => category.id === id));
  }
}
