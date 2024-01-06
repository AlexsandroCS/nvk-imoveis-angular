import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Navisko - Aluguel de Casas',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Navisko - Detalhes da casa',
  }
];

export default routes;
