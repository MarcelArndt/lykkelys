import { Component } from '@angular/core';
import { GirdCards } from './gird-cards/gird-cards';
import { Cards } from './cards/cards';


@Component({
  selector: 'app-cards-section',
  imports: [Cards, GirdCards],
  templateUrl: './cards-section.html',
  styleUrl: './cards-section.scss',
})
export class CardsSection {

}
