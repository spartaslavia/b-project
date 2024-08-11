import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {
  getMachines,
  getMachinesSuccess,
  getMachinesFailure,
} from './machine.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MachinesService } from '@lib/machines/machines.service';

@Injectable()
export class MachineEffects {
  loadMachines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMachines),
      exhaustMap(() => {
        return this.machinesService.getMachines().pipe(
          map((machines) => getMachinesSuccess({ machines })),
          catchError((error) => of(getMachinesFailure({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private machinesService: MachinesService
  ) {}
}
