import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  area = signal("");
  constructor() { }
}