import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post!:Post;
  constructor(private ar:ActivatedRoute, private ps:PostService) { }
  posts:Post[]=this.ps.allPosts;

  ngOnInit(): void {
    let id=this.ar.snapshot.params['id'];
    this.post=this.posts[id-1];
  }

}
