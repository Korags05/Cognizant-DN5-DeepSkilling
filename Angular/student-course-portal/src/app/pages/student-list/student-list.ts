import { Component, inject } from '@angular/core';
import { Student } from '../../services/student';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  private studentService = inject(Student);

  students: any[] = [];

  ngOnInit() {
    this.studentService
      .getStudents()

      .subscribe((data) => {
        this.students = data as any[];
      });
  }
}
