import { Component } from '@angular/core';
import { AreaService } from '../area.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent {
  area = this._areaService.area;
  areas: Array<string> = [
    "Theater 1", "Theater 2", "Theater 3", "Theater 4", "Theater 5", "Theater 6",
  ];
  constructor(public _areaService: AreaService) { }  // <-- Add this
}
