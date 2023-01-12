import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
 user!:User
  constructor(private ar:ActivatedRoute, private us:UserService) { }
  users:User[]=this.us.allUsers;
  ngOnInit(): void {
   let id=this.ar.snapshot.params['id'];
   this.user=this.users[id-1];
  }

}
