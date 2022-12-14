import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './pokemon/components/page-not-found/page-not-found.component';

// Define routes for project.
const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
