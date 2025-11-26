import { Component } from '@angular/core';
import { CodeBlock } from '../tabs-framework/tabs-framework-types';
import { TabsFramework } from '../tabs-framework/tabs-framework';
import { TabsDataService } from '../tabs-framework/tabs-data-service';

import { cardHTML } from './codesnippet/card-html';
import { cardSCSS } from './codesnippet/card-scss';
import { cardTS } from './codesnippet/card-ts';

import { gridHTML } from './codesnippet/grid-html';
import { gridSCSS } from './codesnippet/grid-scss';
import { gridTS } from './codesnippet/grid-ts';

@Component({
  selector: 'app-cards-section',
  imports: [TabsFramework],
  templateUrl: './cards-section.html',
  styleUrl: './cards-section.scss',
})


export class CardsSection {
  constructor(private tabsDataService:TabsDataService){}
   codeBlocks:CodeBlock[]=[
    {label:'Input HTML',language:'markup', code:cardHTML },
    {label: 'Input SCSS', language: 'css', code:cardSCSS },
    {label:'Input TypeScript',language:'javascript', code:cardTS },

    {label:'Button HTML',language:'markup', code:gridHTML },
    {label: 'Button SCSS', language: 'css', code:gridSCSS },
    {label:'Button TypeScript',language:'javascript', code:gridTS },
   ]


   ngOnInit(){
    this.tabsDataService.initCodeData(this.codeBlocks)
   }



}
