import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Post} from "../../models/post.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$ = new Observable<Post[]>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.posts$ = this.dataService.getPosts();
  }

  navigate(id: number | undefined) {
    console.log('id', id);
  }

}
