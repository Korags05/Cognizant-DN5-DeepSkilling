import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  private route = inject(ActivatedRoute);

  courseId = '';

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id')!;

    console.log(this.courseId);
  }
}
