import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSigninComponent } from 'src/app/view/signin/login.signin.component';
import { NoContentComponent } from 'src/app/view/no-content/no-content.component';
import { RouteActivate } from 'src/app/provide/route.activate';
import { MainComponent } from 'src/app/view/container/main/main.component';
import { ContainerComponent } from 'src/app/view/container/container.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: LoginSigninComponent},
    ],
  },
  {
    path: '', component: ContainerComponent, canActivate: [RouteActivate],
    children: [
      {path: 'main', component: MainComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
