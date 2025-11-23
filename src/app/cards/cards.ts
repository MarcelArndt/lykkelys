import { Component } from '@angular/core';

import { TabsFramework } from '../tabs-framework/tabs-framework';
import { CodeBlock } from '../tabs-framework/tabs-framework-types';
import { TabsDataService } from '../tabs-framework/tabs-data-service';

import { testCodeBlockHTML } from '../tabs-framework/test-component/test-html';
import { testCodeBlockSCSS } from '../tabs-framework/test-component/test-scss';
import { testCodeBlockTS } from '../tabs-framework/test-component/test-typscript';


@Component({
  selector: 'app-cards',
  imports: [TabsFramework],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {

  constructor(private dataService:TabsDataService){}

 codeBlocks:CodeBlock[]=[
  {label:'HTML',language:'markup', code:testCodeBlockHTML},
  {label: 'SCSS', language: 'css', code:testCodeBlockSCSS},
  {label:'TypeScript',language:'javascript', code:testCodeBlockTS},
 ]


 async ngOnInit(){
  this.dataService.initCodeData(this.codeBlocks);
 }

}
