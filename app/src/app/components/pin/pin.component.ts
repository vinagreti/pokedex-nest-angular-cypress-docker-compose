import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pin',
  standalone: true,
  imports: [],
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.css',
})
export class PinComponent {
  @Input() color: string = 'white';

  @Input() backgroundColor: string = 'grey';
}
