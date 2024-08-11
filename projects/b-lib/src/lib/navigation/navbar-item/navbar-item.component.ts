import { Component, Input } from '@angular/core';
import { Machine } from '@lib/machines/model.machines';

@Component({
  selector: 'lib-navbar-item',
  standalone: true,
  imports: [],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
})
export class NavbarItemComponent {
  @Input() data!: Machine;
}
