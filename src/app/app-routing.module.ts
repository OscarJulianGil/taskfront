import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './pages/master/master.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
      path:'', component: AppComponent,
      children:[
        {path:'login', component: LoginComponent},
      ]
  },
  {
    path:'init', component: MasterComponent,
    children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
