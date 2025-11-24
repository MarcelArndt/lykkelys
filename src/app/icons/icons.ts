import { Component , Input} from '@angular/core';
import { TabsDataService } from '../tabs-framework/tabs-data-service';
import { TabsFramework } from '../tabs-framework/tabs-framework';
import { CodeBlock } from '../tabs-framework/tabs-framework-types';
import { iconHTML } from './icon/codesnippet/icon-html';
import { iconSCSS } from './icon/codesnippet/icon-scss';
import { iconTS } from './icon/codesnippet/icon-ts';

@Component({
  selector: 'app-icon',
  imports: [TabsFramework],
  templateUrl: './icons.html',
  styleUrl: './icons.scss'
})
export class IconsComponent {
  constructor(private tabsService: TabsDataService){}


  codeBlock:CodeBlock[]=[    
    {label:'Input HTML',language:'markup', code:iconHTML },
    {label: 'Input SCSS', language: 'css', code:iconSCSS },
    {label:'Input TypeScript',language:'javascript', code:iconTS }
  ]

  ngOnInit(){
    this.tabsService.initCodeData(this.codeBlock)
  }
}
