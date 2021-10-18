import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../models/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post | undefined;
  @Output() postId = new EventEmitter<number | undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  submitId() {
    this.postId.emit(this.post?.id);
  }

}
