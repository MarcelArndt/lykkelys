import { Component, Input,signal } from '@angular/core';
import { Icon } from '../icon/icon';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-accordion-component',
  imports: [Icon, CommonModule],
  templateUrl: './accordion-component.html',
  styleUrl: './accordion-component.scss',
})
export class AccordionComponent {
  @Input({required:true})title!:string
  @Input()iconImgSrc!:string
  isTouched = signal<boolean>(false);
  isMenuOpen=signal<boolean>(false);
  isMenuActive = true;

  open(){
    if(!this.isMenuActive) return
    this.isMenuOpen.set(true);
    this.isTouched.set(true);
  }

  close(){
    if(!this.isMenuActive) return
    this.isMenuOpen.set(false);
    this.isTouched.set(true);
  }

  toggle(){
    if(!this.isMenuActive) return
    this.isMenuOpen.update(currentState => !currentState);
    this.isTouched.set(true);
  }

  get menuActive(){
    return this.isMenuActive
  }

  toggleMenuActive(){
    this.isMenuActive = !this.isMenuActive
  }

  setMenuActiveOff(){
    this.isMenuActive = false;
  }

  setMenuActiveOn(){
    this.isMenuActive = true;
  }

  get menuState():boolean{
    return this.isMenuOpen();
  }

  get touched():boolean{
    return this.isTouched();
  }

  reset(){
    this.isTouched.set(false);
    this.isMenuOpen.set(false);
  }

  ngOnDestroy(){
    this.reset();
  }

}
