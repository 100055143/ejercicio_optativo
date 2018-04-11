import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

/**
 * Generated class for the VerTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-todo',
  templateUrl: 'ver-todo.html',
})
export class VerTodoPage {

  todo: Todo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoService) {

    this.todo = this.navParams.data;
    console.log(this.todo.key);
    
  }

  onUpdateTodo(value: Todo){

    this.todoService.updateTodo(value);
    this.navCtrl.pop();

  }

  onRemoveTodo(value: Todo){

    this.todoService.removeTodo(value);
    this.navCtrl.pop();

  }

}
