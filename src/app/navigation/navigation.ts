import { Component } from '@angular/core';
import { NavigationState } from './navigation-state';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterLink,],
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
