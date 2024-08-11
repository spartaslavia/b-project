import { createFeatureSelector, State, createSelector } from '@ngrx/store';
import { MachineState } from './machine.reducer';

export const selectMachinesState =
  createFeatureSelector<MachineState>('machines');

export const selectAllMachines = createSelector(selectMachinesState, (state) =>
  state ? state.machines : []
);
