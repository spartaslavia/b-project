import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '../../../b-lib/src/lib/dashboard/overview/overview.component'
      ).then((m) => m.OverviewComponent),
  },
];
