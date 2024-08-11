import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentTime$ = interval(1000).pipe(map(() => new Date()));
}
