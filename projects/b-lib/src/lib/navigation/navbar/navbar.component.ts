import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Machine, MachineStatus } from '@lib/machines/model.machines';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';
import { MachineComponent } from '@lib/machines/machine/machine.component';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule, NavbarItemComponent, MachineComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() items: Machine[] = [];
  status = MachineStatus;
}
