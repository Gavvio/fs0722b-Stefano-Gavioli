import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/interface/post.interface';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})
export class PostNonAttiviComponent implements OnInit {
  posts:Post[]=[]
  constructor(private postSrv: PostsService) {

   }
   ngOnInit():void{
    this.postSrv.getPostsFiltrati(false).then((arr)=>{
      this.posts=arr
    })
   }
}
