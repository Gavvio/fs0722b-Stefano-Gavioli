import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/interface/post.interface';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})

export class PostAttiviComponent implements OnInit {
  posts:Post[]=[]
  constructor(private postSrv: PostsService) {

   }
   ngOnInit():void{
    this.postSrv.getPostsFiltrati(true).then((arr)=>{
      this.posts=arr
    })
   }
}


