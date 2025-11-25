import { Component } from '@angular/core';
import { ParallaxFramework } from '../parallax-framework/parallax-framework';
import { image } from '../parallax-framework/parallax-framework';


@Component({
  selector: 'app-parallax-section',
  imports: [ParallaxFramework ],
  templateUrl: './parallax-section.html',
  styleUrl: './parallax-section.scss',
})
export class ParallaxSection {

  images:image[] = [
    {verticalSpeed:2 , src:'./assets/parallax/background/1.png', alt:'background-element-1'},
    {verticalSpeed:3 , src:'./assets/parallax/background/2.png', alt:'background-element-2'},
    {verticalSpeed:5 , src:'./assets/parallax/background/3.png', alt:'background-element-3'},
    {verticalSpeed:6 , src:'./assets/parallax/background/4.png', alt:'background-element-4'},
    {verticalSpeed:3.25 , src:'./assets/parallax/background/5.png', alt:'background-element-5'},
    {verticalSpeed:3 , src:'./assets/parallax/background/6.png', alt:'background-element-6'},
  ]
  
}
