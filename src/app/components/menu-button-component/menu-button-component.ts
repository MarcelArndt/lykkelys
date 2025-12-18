import { Component, HostListener } from '@angular/core';
import { MenuButtonComponentService } from './menu-button-component.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-button-component',
  imports: [CommonModule],
  templateUrl: './menu-button-component.html',
  styleUrl: './menu-button-component.scss',
})
export class MenuButtonComponent {
  constructor(private menuService:MenuButtonComponentService ){}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.menuService.close();
  }

  toggleMenu(){
    this.menuService.toggle();
  }

  preventClick(event:Event){
    event.stopPropagation();
  }

  get menuState():boolean{
    return this.menuService.isMenuOpen()
  }

}
