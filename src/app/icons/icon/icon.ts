import { Component , Input} from '@angular/core';

@Component({
  selector: 'icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  @Input() id: string = '';
}
