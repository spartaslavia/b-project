import { Injectable } from '@angular/core';
import {
  Machine,
  MachineStatus,
  MachineType,
} from '@lib/machines/model.machines';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  constructor() {}

  getIconByStatus(status: MachineStatus): string {
    switch (status) {
      case MachineStatus.RUNNING:
        return 'settings_backup_restore';
      case MachineStatus.ALARM:
        return 'error_outline';
      case MachineStatus.WARNING:
        return 'warning';
      default:
        return '';
    }
  }
  getIconByType(type: MachineType) {
    switch (type) {
      case MachineType.SCALE:
        return 'system_update_alt';
      case MachineType.ATTACHER:
        return 'chrome_reader_mode';
      case MachineType.PACKER:
        return 'call_to_action';
      case MachineType.CLOSER:
        return 'grid_on';
      default:
        return '';
    }
  }
}
