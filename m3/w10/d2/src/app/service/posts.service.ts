import { Injectable } from '@angular/core';
import {Post} from '../interface/post.interface';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor() { }

  getPostsFiltrati(a:boolean){
    let p=fetch("/../../assets/db.json")
    let j=p.then((res)=>{
      return res.json()
    })
    let filteredPromise=j.then((posts:Post[])=>{
      return posts.filter(p=>p.active==a)
    })
  return filteredPromise
  // service.getPosts().then((res)=>{})
}
async getPostsFiltered(a:boolean){
  let response= await fetch("/../../assets/db.json")
  let posts:Post[]=await response.json()
  let arr=posts.filter(p=>p.active==a)
  return arr
}
}

