import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

type TaskType = {
  readonly id: number;
  name: string;
}
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit {
  username: string = 'Yassine';
  password: string = 'FOFANA';

  constructor( private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Connexion en cours...');
    if (this.username === 'Yassine' && this.password === 'FOFANA') {
      console.log('Connexion réussie');
      this.router.navigate(['/pokedex']);
    } else {
      console.error('Connexion échouée');
    }
  }
}
