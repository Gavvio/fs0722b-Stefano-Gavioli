import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/interface/post.interface';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
  constructor(private postSrv: PostsService) { }
  articoli=this.postSrv.getPosts();
  ngOnInit(): void {
    this.getActiveComponents();
  }
  async getActiveComponents(){
    console.log(this.articoli);
  }
}
