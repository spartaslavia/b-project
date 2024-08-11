import { Component, Input } from '@angular/core';
import { Machine, MachineStatus, MachineType } from '../model.machines';
import { StyleService } from '@lib/common/style.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-machine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.scss',
})
export class MachineComponent {
  @Input() data!: Machine;
  @Input() shortMode = false;
  machineType = MachineType;

  constructor(private styleService: StyleService) {}

  getIconByStatus(status: MachineStatus) {
    return this.styleService.getIconByStatus(status);
  }
  getIconByType(type: MachineType) {
    return this.styleService.getIconByType(type);
  }
}
