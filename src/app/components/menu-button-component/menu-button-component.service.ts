import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuButtonComponentService {

  isMenuOpen=signal<boolean>(false);

  open(){
   this.isMenuOpen.set(true);
  }

  close(){
   this.isMenuOpen.set(false);
  }

  toggle(){
     this.isMenuOpen.update(currentState => !currentState);
  }
  
}
