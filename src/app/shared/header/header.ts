import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
