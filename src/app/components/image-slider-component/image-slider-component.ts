import { Component,Input, ViewChildren, QueryList, ElementRef, signal, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-image-slider-component',
  imports: [ CommonModule],
  templateUrl: './image-slider-component.html',
  styleUrl: './image-slider-component.scss',
    host: {
    '[style.--animtion-durability]': `animtionDurability + 'ms'`
  }
})
export class ImageSliderComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  @Input({required:true}) imageUrlArray!:string[];
  @Input()sliderInterval:number = 3000;
  @Input()animtionDurability:number = 1000;

  intervalId!: number | null;
  holdCurrentSelectedIndex:number = 0
  isAnimationStarting = true;

  ngAfterViewInit(){
    setInterval(()=>{
      this.addIndex();
      this.isAnimationStarting = false;
      this.cdr.detectChanges();
    }, this.sliderInterval);
  }


  get firstTimeAnimtion():boolean{
    return this.isAnimationStarting
  }

  get currentIndex():number{
    return this.holdCurrentSelectedIndex
  }

  get nextIndex(): number {
    return this.currentIndex >= this.imageUrlArray.length - 1? 0 : this.currentIndex + 1;
  }

  get previousIndex(): number {
    return this.currentIndex == 0? this.imageUrlArray.length - 1 : this.currentIndex - 1;
  }

  addIndex(){
    if(this.holdCurrentSelectedIndex >= this.imageUrlArray.length -1){
      this.holdCurrentSelectedIndex = 0;
    } else {
      this.holdCurrentSelectedIndex++;
    }

  }

  ngOnDestroy() {
  }

}
