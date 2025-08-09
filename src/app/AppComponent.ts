import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainAuth } from './registration/main-auth/main-auth';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MainAuth,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent  {
  protected readonly title = signal('Learning-Management-System');
}
