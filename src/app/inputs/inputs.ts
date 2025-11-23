import { Component } from '@angular/core';
import { TabsFramework } from '../tabs-framework/tabs-framework';
import { DynamicInput } from './dynamic-input/dynamic-input';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsDataService } from '../tabs-framework/tabs-data-service';
import { CodeBlock } from '../tabs-framework/tabs-framework-types';

import { buttonHTML } from './dynamic-input/codesnippet/button-html';
import { buttonTS } from './dynamic-input/codesnippet/button-ts';
import { buttonSCSS } from './dynamic-input/codesnippet/button-sccs';

import { inputHTML } from './dynamic-input/codesnippet/input-html';
import { inputSCSS } from './dynamic-input/codesnippet/input-scss';
import { inputTS } from './dynamic-input/codesnippet/input-ts';


@Component({
  selector: 'app-inputs',
  imports: [TabsFramework, ReactiveFormsModule, CommonModule, DynamicInput],
  templateUrl: './inputs.html',
  styleUrl: './inputs.scss',
})
export class Inputs {
  constructor(private tabsService: TabsDataService){}

   codeBlocks:CodeBlock[]=[
    {label:'Input HTML',language:'markup', code:inputHTML },
    {label: 'Input SCSS', language: 'css', code:inputSCSS },
    {label:'Input TypeScript',language:'javascript', code:inputTS },

    {label:'Button HTML',language:'markup', code:buttonHTML },
    {label: 'Button SCSS', language: 'css', code:buttonSCSS },
    {label:'Button TypeScript',language:'javascript', code:buttonTS },
   ]

myform = new FormGroup({
  email: new FormControl(''),
  username: new FormControl(''),
  password: new FormControl(''),
});


ngOnInit(){
  this.tabsService.initCodeData(this.codeBlocks)
}

}
