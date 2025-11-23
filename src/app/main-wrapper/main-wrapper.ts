import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { NavigationState } from '../navigation/navigation-state';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-wrapper',
  imports: [Navigation, CommonModule ],
  templateUrl: './main-wrapper.html',
  styleUrl: './main-wrapper.scss',
})
export class MainWrapper {
  constructor(public navigationState:NavigationState){}

  get menuState(){
    return this.navigationState.getState()
  }
}
