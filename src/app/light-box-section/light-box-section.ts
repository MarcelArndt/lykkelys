import { Component } from '@angular/core';
import { TabsDataService } from '../tabs-framework/tabs-data-service';
import { TabsFramework } from '../tabs-framework/tabs-framework';
import { CodeBlock } from '../tabs-framework/tabs-framework-types';

import { lightboxHTML } from './codesnippet/lightbox-html';
import { lightboxSCSS } from './codesnippet/lightbox-scss';
import { lightboxTS } from './codesnippet/lightbox-ts';
import { lightboxService } from './codesnippet/lightbox-service';
import { lightboxGSAP } from './codesnippet/lightbox-gsap';


@Component({
  selector: 'app-light-box-section',
  imports: [ TabsFramework ],
  templateUrl: './light-box-section.html',
  styleUrl: './light-box-section.scss',
})
export class LightBoxSection {
  constructor(private tabsDataService:TabsDataService){}

     codeBlocks:CodeBlock[]=[
      {label:'HTML',language:'markup', code:lightboxHTML },
      {label:'SCSS', language: 'css', code:lightboxSCSS },
      {label:'TypeScript',language:'javascript', code:lightboxTS },
      {label:'Service',language:'javascript', code:lightboxService },
      {label:'GSAP',language:'javascript', code:lightboxGSAP },
     ]


  ngOnInit(){
    this.tabsDataService.initCodeData(this.codeBlocks)
  }
}
