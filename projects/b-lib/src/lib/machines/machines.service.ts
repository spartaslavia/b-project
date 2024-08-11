import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from './model.machines';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MachinesService {
  constructor(private http: HttpClient) {}

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>('/assets/data/machines.json');
  }
}
