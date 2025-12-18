import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars-component',
  imports: [],
  templateUrl: './rating-stars-component.html',
  styleUrl: './rating-stars-component.scss',
})
export class RatingStarsComponent {
  @Input({required:true})value!:number;
  @Input()maxValue:number = 5;

  arrayWithValues!:string[]


  ngOnInit(){
    this.calculateStars();
  }

  calculateStars(){
    const fullStars = Math.floor(this.value);
    const hasHalfStar = this.value - fullStars >= 0.1 ? 1 : 0;
    this.arrayWithValues = Array.from({length: this.maxValue}, (_, i) => {
      if (i < fullStars) return 'full';
      if (i === fullStars && hasHalfStar) return 'half';
      return 'empty';
    });
  }

  get stars():string[]{
    if(this.arrayWithValues == undefined) return []
    return this.arrayWithValues
  }

}
