import { Component, ViewChild, ElementRef, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sticky-header-component',
  imports: [CommonModule],
  templateUrl: './sticky-header-component.html',
  styleUrl: './sticky-header-component.scss',
})
export class StickyHeaderComponent {
@ViewChild('header')headerElement!:ElementRef;
  initialOffsetTop = 0;
  currentPosition = 0;
  isScrollingUpWards = false;

  ngAfterViewInit() {
    this.initialOffsetTop = this.headerElement?.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(!this.headerElement) return;
    if (scrollTop > this.initialOffsetTop) {
      this.headerElement.nativeElement.style.top = `${scrollTop}px`;
    } else {
      this.headerElement.nativeElement.style.top = '0px';
    }
    this.isScrollingUpWards = this.currentPosition < scrollTop  || scrollTop == 0 ? false : true;
    this.currentPosition = scrollTop;
  }

}
