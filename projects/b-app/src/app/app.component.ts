import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@lib/navigation/header/header.component';
import { NavbarComponent } from '@lib/navigation/navbar/navbar.component';
import { getMachines } from '@lib/store/machine.actions';
import { selectAllMachines } from '@lib/store/machine.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  machines$ = this.store.select(selectAllMachines);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getMachines());
  }
}
