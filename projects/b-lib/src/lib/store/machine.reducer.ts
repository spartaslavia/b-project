import { Machine } from '@lib/machines/model.machines';
import { createReducer, on } from '@ngrx/store';
import {
  getMachines,
  getMachinesSuccess,
  getMachinesFailure,
} from './machine.actions';

export interface MachineState {
  machines: Machine[];
  loading: boolean;
  error: any;
}

export const initialState: MachineState = {
  machines: [],
  loading: false,
  error: null,
};

export const machineReducer = createReducer(
  initialState,
  on(getMachines, (state) => ({ ...state, loading: true, error: null })),
  on(getMachinesSuccess, (state, { machines }) => ({
    ...state,
    machines,
    loading: false,
  })),
  on(getMachinesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
