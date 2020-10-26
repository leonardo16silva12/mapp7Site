import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechanicPageRoutingModule } from './mechanic-routing.module';

import { MechanicPage } from './mechanic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechanicPageRoutingModule
  ],
  declarations: [MechanicPage]
})
export class MechanicPageModule {}
