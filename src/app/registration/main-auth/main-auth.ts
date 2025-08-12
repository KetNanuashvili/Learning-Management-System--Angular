import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-main-auth',
  standalone: true,
  imports: [CommonModule,Header],
  templateUrl: './main-auth.html',
  styleUrl: './main-auth.css'
})
export class MainAuth {

  activeRole: string = 'admin'; // default

  setRole(role: string) {
    this.activeRole = role;
  }
 }
