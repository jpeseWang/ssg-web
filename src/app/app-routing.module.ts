import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutusComponent,
  },
  {
    path: 'movie',
    component: MovieComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./components/blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
