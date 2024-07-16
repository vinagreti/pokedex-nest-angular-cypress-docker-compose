import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css',
})
export class ProgressComponent {
  @Input() total: number = 0;
}
