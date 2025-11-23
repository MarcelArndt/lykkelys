export const testCodeBlockHTML:string=`
<section>
    <div class="tabs-selektor-area">
        <ul>
            @for (code of codeBlocks; track code; let index = $index){
                <li (click)="selectTab(index)">{{code.label}}</li>
            }

        </ul>
    </div>

    <div>
        @for (code of codeBlocks; track code; let index = $index) {
            <pre>
                <code [class]="'language-' + code.language"  [innerHTML]="code.highlighted" [ngClass]="index == activeIndex? 'open' : 'close'">
                </code>
            </pre>
        } @empty {
        <li>There are no items.</li>
        }
        
    </div>
</section>`;