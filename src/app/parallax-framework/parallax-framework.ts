import { Component, Input, ViewChild, ElementRef, HostBinding, QueryList, ViewChildren} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface image{
  verticalSpeed:number,
  src:string,
  alt:string
}

@Component({
  selector: 'parallax',
  imports: [],
  templateUrl: './parallax-framework.html',
  styleUrl: './parallax-framework.scss',
})
export class ParallaxFramework {
  @Input()customScroller!:string;
  @Input()background!:string;
  @Input({required:true}) images!:image[]; //Input mit den Bildern die gerendert werden. {src:Url des Bildes, alt:alternativ text, verticalSpeed:wie stark soll das Bild shiften}
  @ViewChild('parallaxContainer') parallaxContainer!:ElementRef; //Element zum hinzufügen/rendern der Bilder
  @ViewChildren('parallax') parallaxImages!: QueryList<ElementRef>;


  @HostBinding('style.--background-color')
  get backgroundColor(): string {
    return this.background || 'transparent';
  }

ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.gsapAnimation(this.getScrollTriggerConfig())
  }


  gsapAnimation(scrollTriggerConfig={}){
      this.parallaxImages.forEach((element, index) => {
        const image = element.nativeElement;
        const speed = this.images[index].verticalSpeed;

        gsap.fromTo(image, 
          { y: 20 * speed }, 
          {
            y: -10 * speed,
            ease: "none",
            scrollTrigger: scrollTriggerConfig
          }
        );
      });
  }

  getScrollTriggerConfig(){
        const scrollTriggerConfig:any = {
          trigger: this.parallaxContainer.nativeElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        };

        if(this.customScroller) {
          scrollTriggerConfig.scroller = document.querySelector(this.customScroller) as HTMLElement;;
        }
        
      return scrollTriggerConfig
  }

}






