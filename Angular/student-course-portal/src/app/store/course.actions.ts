import { createAction, props } from '@ngrx/store';

export const addCourse = createAction('[Course] Add', props<{ name: string }>());

export const removeCourse = createAction('[Course] Remove', props<{ name: string }>());
