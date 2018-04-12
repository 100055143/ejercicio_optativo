import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../services/todo.service';
import { Tarea } from '../../models/todo.model';
/**
 * Generated class for the NuevoTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-todo',
  templateUrl: 'nuevo-todo.html',
})
export class NuevoTodoPage {

  constructor(public navCtrl: NavController, private TodoService: TodoService) {
  }

  onAddTarea(value: Tarea){

    this.TodoService.addTarea(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }

}
