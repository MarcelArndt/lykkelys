import { Component } from '@angular/core';
import { GirdCards } from '../cards-section/gird-cards/gird-cards';
import { Cards } from '../cards-section/cards/cards';
import { IconComponent } from '../icons/icon/icon';

@Component({
  selector: 'app-start',
  imports: [ GirdCards,Cards, IconComponent  ],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {

}
