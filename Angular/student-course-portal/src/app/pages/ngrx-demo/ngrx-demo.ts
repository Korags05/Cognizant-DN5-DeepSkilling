import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { addCourse } from '../../store/course.actions';

@Component({
  selector: 'app-ngrx-demo',
  imports: [AsyncPipe],
  templateUrl: './ngrx-demo.html',
  styleUrl: './ngrx-demo.css',
})
export class NgrxDemo {
  private store = inject(Store);

  courses$ = this.store.select('courses');

  add() {
    this.store.dispatch(addCourse({ name: 'Docker' }));
  }
}
