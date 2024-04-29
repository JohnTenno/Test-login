import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './src/app/auth/login/login.component';
import { RegisterComponent } from './src/app/auth/register/register.component';
import { HomeComponent } from './src/components/home/home.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  {
    path: "", component: AppComponent,
    children: [
      {
        path: "login", component: LoginComponent,
      },
      {
        path: "register", component: RegisterComponent,
      },
    ]
  },
  { path: "home", component: HomeComponent, pathMatch: 'full' }
]


// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     children: [
//       { path: '', redirectTo: 'events', pathMatch: 'full' },
//       { path: 'events', component: EventsComponent },
//       { path: 'bars', component: BarsDetailsComponent },
//       { path: 'bands', component: BandsDetailsComponent }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
