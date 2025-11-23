import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationState {
  private isMenuOpen=signal(false)


  open(){
    this.isMenuOpen.set(true)
  }

  close(){
    this.isMenuOpen.set(false)
  }

  getState():boolean{
    return this.isMenuOpen()
  }

  toggle(){
    this.isMenuOpen.update(currentValue => !currentValue)
  }


}
