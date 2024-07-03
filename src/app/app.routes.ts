import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { DetailComponent } from './detail/detail.component';
export const routes: Routes = [
    {path: 'pokedex', component: PokedexComponent},
    {path: '', component: ConnexionComponent},
    {path: 'inscription', component: InscriptionComponent},
    {path: 'detail/:name', component: DetailComponent}
];
