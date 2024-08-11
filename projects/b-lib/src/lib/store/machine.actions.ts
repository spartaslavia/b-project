import { Machine } from '@lib/machines/model.machines';
import { createAction, props } from '@ngrx/store';

export const getMachines = createAction('[Machine] Get Machines');
export const getMachinesSuccess = createAction(
  '[Machine] Get Machines Success',
  props<{ machines: Machine[] }>()
);
export const getMachinesFailure = createAction(
  '[Machine] Get Machines Failure',
  props<{ error: any }>()
);
