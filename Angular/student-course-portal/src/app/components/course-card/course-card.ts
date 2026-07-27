import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabelPipe, RouterLink],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input()
  course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
  };

  @Output()
  enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes);
  }

  enroll() {
    this.enrollRequested.emit(this.course.id);
  }
  @Output()
  deleteRequested = new EventEmitter<number>();

  deleteCourse() {
    this.deleteRequested.emit(this.course.id);
  }
}
