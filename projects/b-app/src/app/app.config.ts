import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MachineEffects } from '@lib/store/machine.effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { machineReducer } from '@lib/store/machine.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(MachineEffects),
    provideState({ name: 'machines', reducer: machineReducer }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
