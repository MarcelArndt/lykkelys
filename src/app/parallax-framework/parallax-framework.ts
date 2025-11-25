import { Component, Input, ViewChild, ElementRef, Renderer2} from '@angular/core';


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
  @ViewChild('imagesContainer') imagesContainer!:ElementRef; //Element zum hinzufügen/rendern der Bilder


  ngAfterViewInit(){
    console.log(this.images)

    const newImage = this.renderer.createElement('img');
    this.renderer.setAttribute(newImage, 'src', this.images[0].src)
    this.renderer.setAttribute(newImage, 'alt', this.images[0].alt)
    this.renderer.addClass(newImage, 'parallax-image');
    this.renderer.appendChild(this.imagesContainer.nativeElement, newImage);
  }

}
