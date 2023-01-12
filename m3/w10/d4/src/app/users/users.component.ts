import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user!:User;

  constructor( private us:UserService) {

   }
   Utenti:User[]=this.us.getUsers();

  ngOnInit(): void {
  }

}
