import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  allUsers: User[] = [
    {
      id: 1,
      nome: 'Francesco',
      cognome: 'Pastore',
      email: 'Francesco.babbione@gmail.com',
    },
    {
      id: 2,
      nome: 'Stefano',
      cognome: 'Gavioli',
      email: 'Stefano.DioRe@gmail.com',
    },
    {
      id: 3,
      nome: 'Riccardo',
      cognome: 'Damiani',
      email: 'Forza.Napoli@gmail.com',
    },
    {
      id: 4,
      nome: 'Umberto',
      cognome: 'Diodoro',
      email: 'Golden.god@gmail.com',
    },
    {
      id: 5,
      nome: 'Damiano',
      cognome: 'Mongoloide',
      email: 'Mongolia.casaMia@gmail.com',
    },
  ];

  constructor() {}
  getUsers():User[]{
    return this.allUsers;
  }
}
