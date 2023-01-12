import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active',
    component: ActiveComponent
  },
  {
    path:'active/details/:id',
    component: PostDetailsComponent
  },
  {
    path: 'inactive',
    component: InactiveComponent
  },
  {
    path: 'inactive/details/:id',
    component: PostDetailsComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children:[
      {
        path: 'users-details/:id',
        component:UsersDetailsComponent
      }
    ]
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
