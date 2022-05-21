import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { GetstartedComponent } from "./getstarted/getstarted.component";
import { QuizhomeComponent } from "./quizhome/quizhome.component";
import { QuizdisplayComponent } from "./quizdisplay/quizdisplay.component";
import { ReviewComponent } from './review/review.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [

  { path:'',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'getstart',component:GetstartedComponent},
  { path:'quizhome',component:QuizhomeComponent},
  { path:'contactus',component:ContactusComponent},
  { path:'quizdisplay',component:QuizdisplayComponent},
  { path:'review',component:ReviewComponent},
  { path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
