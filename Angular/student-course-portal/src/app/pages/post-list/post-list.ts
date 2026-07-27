import { Component, inject } from '@angular/core';
import { Student } from '../../services/student';
import { map } from 'rxjs';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  private studentService = inject(Student);

  posts: any = [];

  ngOnInit() {
    this.studentService

      .getPosts()

      .pipe(
        map((posts: any) => {
          return posts.slice(0, 5);
        }),
      )

      .subscribe((data) => {
        this.posts = data;
      });
  }
}
