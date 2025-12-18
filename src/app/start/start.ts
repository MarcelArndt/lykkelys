import { Component } from '@angular/core';
import { GirdCards } from '../components/gird-cards/gird-cards';
import { Cards } from '../components/cards/cards';
import { Icon } from '../components/icon/icon';

@Component({
  selector: 'app-start',
  imports: [ GirdCards, Cards, Icon],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {

}
