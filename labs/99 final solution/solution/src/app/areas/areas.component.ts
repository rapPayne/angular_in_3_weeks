import { Component } from '@angular/core';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent {
  area = this._areaService.area;  // <-- Add this
  areas: Array<string> = [
    "Theater 1", "Theater 2", "Theater 3", "Theater 4", "Theater 5", "Theater 6",
  ];
  constructor(public _areaService: AreaService) { }  // <-- Add this
}
