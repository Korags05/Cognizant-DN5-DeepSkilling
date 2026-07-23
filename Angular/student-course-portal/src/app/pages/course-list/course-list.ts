import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
    },

    {
      id: 2,
      name: 'Java',
      code: 'CS102',
      credits: 3,
      gradeStatus: 'failed',
    },

    {
      id: 3,
      name: 'Spring Boot',
      code: 'CS103',
      credits: 4,
      gradeStatus: 'pending',
    },

    {
      id: 4,
      name: 'Database',
      code: 'CS104',
      credits: 3,
      gradeStatus: 'pending',
    },

    {
      id: 5,
      name: 'Operating System',
      code: 'CS105',
      credits: 4,
      gradeStatus: 'pending',
    },
  ];

  selectedCourseId = 0;

  onEnroll(id: number) {
    console.log('Enrolling in', id);

    this.selectedCourseId = id;
  }
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
}
