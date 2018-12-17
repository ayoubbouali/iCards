import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './component/cards/cards.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "", redirectTo: "/cards", pathMatch: 'full', canActivate: [AuthGuard]},//patchMatch 7yed la route li dkhel biha kamla kighli le nom de domaine w kilse9 lih la route jdida dyalna
  {path: "cards", component: CardsComponent, canActivate: [AuthGuard]},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
