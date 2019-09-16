import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MatFormFieldModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material';
import {MatGridListModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatSidenavModule,MatIconModule,MatListModule} from '@angular/material';
import { CrumbComponent } from './crumb/crumb.component';
import { SolutionbComponent } from './solutionb/solutionb.component';
import { ModulerComponent } from './moduler/moduler.component';
import { ColortypeComponent } from './colortype/colortype.component';
import { ProductionComponent } from './production/production.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ExtraComponent } from './extra/extra.component';
import { ColorNameComponent } from './color-name/color-name.component';
import { ColorCodeComponent } from './color-code/color-code.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CrumbComponent,
    SolutionbComponent,
    ModulerComponent,
    ColortypeComponent,
    ProductionComponent,
    PayrollComponent,
    SideNavComponent,
    ExtraComponent,
    ColorNameComponent,
    ColorCodeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatFormFieldModule,
     BrowserAnimationsModule,
     MatSidenavModule,
    MaterialModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
