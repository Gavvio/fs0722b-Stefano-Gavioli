import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo.interface';
import { PhotosService } from '../photos.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from '../app.component';
import { DebugInterceptor } from '../debug.interceptor';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
foto:Photo[]=[];
finito:boolean=false;
piaciuti:number=0;
  constructor(private ps:PhotosService) { }
  ngOnInit(): void {
    this.ps.get().subscribe(
     (data)=>{this.foto=data
      this.finito=true;
      console.log(this.foto)
     });
  }
  miPiace():void{
    this.ps.addFavorite();
    this.piaciuti=this.ps.favoritesCounter;
  }
  elimina(id:number):void{
    this.ps.delete(id).subscribe(()=>{
      this.foto = this.foto?.filter((img) => img.id != id);
    });

  }

}
