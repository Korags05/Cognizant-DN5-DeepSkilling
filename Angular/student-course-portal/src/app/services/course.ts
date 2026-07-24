import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses = [
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
      gradeStatus: 'passed',
    },
  ];

  getCourses() {
    return this.courses;
  }
  addCourse(course: any) {
    this.courses.push(course);
  }
  deleteCourse(id: number) {
    const index = this.courses.findIndex((c) => c.id === id);

    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}
