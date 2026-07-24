import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  private courseService = inject(CourseService);

  courses = this.courseService.getCourses();

  selectedCourseId = 0;

  onEnroll(id: number) {
    console.log('Enrolling in', id);

    this.selectedCourseId = id;
  }
  isLoading = true;
  addDummyCourse() {
    this.courseService.addCourse({
      id: 10,

      name: 'Docker',

      code: 'CS200',

      credits: 2,

      gradeStatus: 'pending',
    });
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
  delete(id: number) {
    this.courseService.deleteCourse(id);
  }
}
