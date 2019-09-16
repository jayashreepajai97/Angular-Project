import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {ModulerComponent} from './moduler/moduler.component';
import {CrumbComponent } from './crumb/crumb.component';
import {SolutionbComponent} from './solutionb/solutionb.component';
import { ColortypeComponent } from './colortype/colortype.component';
import { ProductionComponent } from './production/production.component';
import {PayrollComponent} from './payroll/payroll.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ExtraComponent } from './extra/extra.component';
import { ColorCodeComponent } from './color-code/color-code.component';
import {ColorNameComponent } from './color-name/color-name.component';



const routes: Routes = [
{path:'extra',component:ExtraComponent},
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'sidenav',component:SideNavComponent,

children:[
  
{path:'',component:DashboardComponent},
{path:'moduler',component:ModulerComponent},
{path:'crumb',component:CrumbComponent},
{path:'solutionb',component:SolutionbComponent},
{path:'colortype',component:ColortypeComponent,

children:[
  { path:'color-code',component:ColorCodeComponent},
  { path:'color-name',component:ColorNameComponent}
       ]
},
{path:'production',component:ProductionComponent},
{path:'payroll',component:PayrollComponent}

]
},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DashboardComponent,LoginComponent,ModulerComponent,CrumbComponent,SolutionbComponent,ExtraComponent]