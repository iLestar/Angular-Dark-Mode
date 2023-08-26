import { Component, HostBinding, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Dark-mode-Angular';
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  )
  @HostBinding('class.dark') get mode() {
    return this.darkMode()
  }

  constructor() {
    effect(() => {
        window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()))
      })
  }
}
