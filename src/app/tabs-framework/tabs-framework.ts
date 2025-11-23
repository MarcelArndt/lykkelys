import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsDataService } from './tabs-data-service';
import { CodeBlock } from './tabs-framework-types';

import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-tabs-framework',
  imports: [CommonModule],
  templateUrl: './tabs-framework.html',
  styleUrl: './tabs-framework.scss',
})
export class TabsFramework {
  constructor(private cdr: ChangeDetectorRef, private dataService:TabsDataService ){}

codeBlocks!: CodeBlock[]

  activeIndex = 0;

  ngAfterViewInit() {
    this.getDataFromService();
    this.cdr.detectChanges();
  }


  getDataFromService(){
    this.codeBlocks = this.dataService.codeBlocks;
  }


  selectTab(index: number) {
    this.activeIndex = index;
  }

}
