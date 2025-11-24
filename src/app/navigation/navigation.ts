import { Component } from '@angular/core';
import { NavigationState } from './navigation-state';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icons/icon/icon';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  constructor(private navigationState:NavigationState){}


  get menuState(){
    return this.navigationState.getState()
  }

  toggleMenu(){
    this.navigationState.toggle()
  }

  
}
