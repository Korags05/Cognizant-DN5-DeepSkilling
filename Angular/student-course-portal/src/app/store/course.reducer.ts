import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './course.actions';

export const initialState = ['Angular', 'Java'];

export const courseReducer = createReducer(
  initialState,

  on(
    CourseActions.addCourse,

    (state, action) => [...state, action.name],
  ),

  on(
    CourseActions.removeCourse,

    (state, action) => state.filter((x) => x !== action.name),
  ),
);
