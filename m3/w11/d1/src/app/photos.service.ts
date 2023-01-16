import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo.interface';
import { catchError, throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  baseURL="https://jsonplaceholder.typicode.com/photos"
  favoritesSub= new Subject<number>()
  favoritesCounter = 0;
  constructor(private http:HttpClient) {  }

  get(){
    return this.http.get<Photo[]>(this.baseURL).pipe(catchError(err =>{
      return throwError(this.getErrorMess(err.status))
    }))
}

delete(id:number){
 return this.http.delete(`${this.baseURL}/${id}`).pipe(catchError(err=>{
  return throwError(this.getErrorMess(err.status))
 }))
}

addFavorite(){
  this.favoritesCounter ++
  this.favoritesSub.next(this.favoritesCounter)
}

private getErrorMess(status:number){
  let mess=""
  if(status==404){
    mess="Not found"
  }
  else if(status==500){
    mess="server not responding"
  }
  else {
    mess="tutto a posto"
  }
  return mess;
}
}
