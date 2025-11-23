import { Injectable, signal } from '@angular/core';
import { CodeBlock } from './tabs-framework-types';

import * as Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';


@Injectable({
  providedIn: 'root',
})
export class TabsDataService {

  codeBlocks: CodeBlock[] = [];
  isCodeParsed=signal(false)

  initCodeData(codeBlocks:CodeBlock[]){
    this.isCodeParsed.set(false)
    this.codeBlocks = [] 
    this.codeBlocks = codeBlocks
    this.highlightAllCode();
    this.isCodeParsed.set(true)
  }


highlightAllCode() {
  
  this.codeBlocks.forEach(block => {
    if (block.code && Prism.languages[block.language]) {
      block.highlighted = Prism.highlight(
        block.code,
        Prism.languages[block.language],
        block.language
      );
    }
  });
}

  
}
