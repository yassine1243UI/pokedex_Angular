import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {

  inscriptionForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  onSubmit(): void {
    if (this.inscriptionForm.valid) {
      console.log('Nom d\'utilisateur :', this.inscriptionForm.get('username')?.value);
      console.log('Mot de passe :', this.inscriptionForm.get('password')?.value);
      console.log('Confirmation du mot de passe :', this.inscriptionForm.get('confirmPassword')?.value);
      // Par exemple, appeler un service d'authentification
    } else {
      console.log('Veuillez remplir tous les champs.');
    }
  }
}
