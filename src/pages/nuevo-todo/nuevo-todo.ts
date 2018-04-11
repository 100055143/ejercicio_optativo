import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

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

  constructor(public navCtrl: NavController, private todoService: TodoService) {

   
  }

  onAddTodo(value: Todo){

    this.todoService.addTodo(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }

}
