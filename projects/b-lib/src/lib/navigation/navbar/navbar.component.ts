import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Machine } from '@lib/machines/model.machines';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() items: Machine[] = [];
}
