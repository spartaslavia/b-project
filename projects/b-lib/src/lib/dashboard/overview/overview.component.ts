import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MachineComponent } from '@lib/machines/machine/machine.component';
import { selectAllMachines } from '@lib/store/machine.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-overview',
  standalone: true,
  imports: [CommonModule, MachineComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  machines$ = this.store.select(selectAllMachines);

  constructor(private store: Store) {}
}
