import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent {
  areas: Array<string> = [
    "Theater 1", "Theater 2", "Theater 3", "Theater 4", "Theater 5", "Theater 6",
  ];
}
