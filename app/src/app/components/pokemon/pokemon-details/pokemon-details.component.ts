import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../../../../models/pokemon.models';
import { NgFor } from '@angular/common';
import { PinComponent } from '@/components/pin/pin.component';
import { colorsByType } from '@/helpers/colors-by-type';
import { ProgressComponent } from '@/components/progress/progress.component';
import { statAbbreviation } from '@/helpers/stat-abbreviation';
import { IconComponent } from '@/components/icon/icon.component';
import { ButtonComponent } from '@/components/button/button.component';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [
    NgFor,
    PinComponent,
    ProgressComponent,
    IconComponent,
    ButtonComponent,
  ],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent {
  colorsByType = colorsByType;

  statAbbreviation = statAbbreviation;

  @Input({ required: true }) pokemon!: Pokemon;
}
