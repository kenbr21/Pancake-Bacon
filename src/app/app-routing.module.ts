import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './page/portafolio/portafolio.component';
import { AboutComponent } from './page/about/about.component';
import { ItemComponent } from './page/item/item.component';


const routes: Routes = [
  {path: 'home', component: PortafolioComponent  },
  {path: 'about', component: AboutComponent },
  {path: 'item', component: ItemComponent },
  {path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
