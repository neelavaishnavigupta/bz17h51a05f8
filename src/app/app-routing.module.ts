import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ColorsComponent } from './colors/colors.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent},

  {path:'colors',component:ColorsComponent},  
  {path:'country',component:CountryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
