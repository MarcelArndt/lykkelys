import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainWrapper } from './main-wrapper/main-wrapper';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainWrapper],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lykkly');
}
