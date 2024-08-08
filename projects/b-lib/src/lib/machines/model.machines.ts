export enum MachineStatus {
  NONE = 'none',
  RUNNING = 'running',
  ALARM = 'alarm',
  WARNING = 'warning',
}

export enum MachineType {
  NONE = 'none',
  SCALE = 'scale',
  ATTACHER = 'attacher',
  PACKER = 'packer',
  CLOSER = 'closer',
}

export interface Machine {
  id: number;
  name: string;
  status: MachineStatus;
  type: MachineType;
  lastUpdated: Date;
}
