import { Component, Input, ViewChild, ElementRef, Renderer2, HostListener, QueryList, ViewChildren} from '@angular/core';
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
  constructor(private renderer: Renderer2){}
  @Input({required:true}) images!:image[]; //Input mit den Bildern die gerendert werden. {src:Url des Bildes, alt:alternativ text, verticalSpeed:wie stark soll das Bild shiften}
  @ViewChild('parallaxContainer') parallaxContainer!:ElementRef; //Element zum hinzufügen/rendern der Bilder
  @ViewChildren('parallax') parallaxImages!: QueryList<ElementRef>;


ngAfterViewInit() {
  gsap.registerPlugin(ScrollTrigger);
  
    const scroller = document.querySelector('.content-wrapper') as HTMLElement;
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
    
    const imagesArray = this.parallaxImages.toArray();
    
    imagesArray.forEach((element, index) => {
      const el = element.nativeElement;
      const speed = this.images[index].verticalSpeed;

      gsap.fromTo(el, 
        { y: -10 * speed }, 
        {
          y: 20 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: this.parallaxContainer.nativeElement,
            scroller: scroller,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.3,
          }
        }
      );
    });
    
    ScrollTrigger.refresh();
    
  }
}






