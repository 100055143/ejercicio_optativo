import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import {NuevoTodoPage, VerTodoPage} from '../pages'
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  todos$: Observable<Todo[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private TodoService: TodoService, private alertCtrl: AlertController) {
    
  }

  ionViewWillEnter(){

   this.todos$ = this.TodoService
     .getTodos()  //Retorna la DB
     .snapshotChanges() //retorna los cambios en la DB (key and value)
     .map(

       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       }); 
    
  }

  onLoadNewPage() {
    // Reset the content nav to have just this page
    this.navCtrl.push(NuevoTodoPage);
  }

  onItemTapped($event, todo){
    this.navCtrl.push(VerTodoPage, todo);
  }

}
