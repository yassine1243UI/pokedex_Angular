import { Component, OnInit } from '@angular/core';
import { ConnexionComponent } from "./connexion/connexion.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ConnexionComponent,
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokedex';
}
