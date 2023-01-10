import { Injectable } from '@angular/core';
import {Post} from '../interface/post.interface';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
 posts: Post[]=[];
  constructor() { }
  async getPosts(){
    fetch('/../../assets/db.json')
    .then(data => {
    return data.json();
    }).then(res=>{
      console.log(res);
      for(let i=0;i<res.length;i++){
        this.posts.push=res[i];
      }
      console.log(this.posts);
      return this.posts;
    })
  }
  // service.getPosts().then((res)=>{})
}
