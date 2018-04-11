import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoTodoPage } from './nuevo-todo';

@NgModule({
  declarations: [
    NuevoTodoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoTodoPage),
  ],
})
export class NuevoTodoPageModule {}
