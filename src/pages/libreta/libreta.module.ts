import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibretaPage } from './libreta';

@NgModule({
  declarations: [
    LibretaPage,
  ],
  imports: [
    IonicPageModule.forChild(LibretaPage),
  ],
})
export class LibretaPageModule {}
