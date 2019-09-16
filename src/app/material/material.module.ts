import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatGridListModule,
  MatFormField,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,MatMenuModule,MatSelectModule,
} from '@angular/material';

import { from } from 'rxjs';

const material = [MatButtonModule,MatSelectModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,MatMenuModule


];

@NgModule({

  imports: [material,
    CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatInputModule,MatMenuModule, MatTableModule, MatSidenavModule, MatTabsModule],
  exports: [MatButtonModule, MatCardModule, MatFormFieldModule,MatMenuModule,
    MatInputModule, MatInputModule, MatTableModule, MatSidenavModule, MatTabsModule,material]


})


export class MaterialModule { }
