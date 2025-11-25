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
    {verticalSpeed:10 , src:'./assets/parallax/background/1.png', alt:'background-element-1'},
    {verticalSpeed:14 , src:'./assets/parallax/background/2.png', alt:'background-element-2'},
    {verticalSpeed:18 , src:'./assets/parallax/background/3.png', alt:'background-element-3'},
    {verticalSpeed:21 , src:'./assets/parallax/background/4.png', alt:'background-element-4'},
    {verticalSpeed:25 , src:'./assets/parallax/background/5.png', alt:'background-element-5'},
    {verticalSpeed:32 , src:'./assets/parallax/background/6.png', alt:'background-element-6'},
  ]
  
}
