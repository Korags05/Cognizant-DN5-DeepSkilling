import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetails } from './pages/course-details/course-details';
import { StudentForm } from './pages/student-form/student-form';
import {StudentList} from "./pages/student-list/student-list";
import { PostList } from './pages/post-list/post-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: CourseList },
  { path: 'student-form', component: StudentForm },
  { path: 'students', component: StudentList },
  { path: 'courses/:id', component: CourseDetails },
  {path: 'posts', component: PostList},
];

