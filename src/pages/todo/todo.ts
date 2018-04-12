import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import {NuevoTodoPage, VerTodoPage} from '../pages'
import { TodoService } from '../../services/todo.service';
import { Tarea } from '../../models/todo.model';
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

  tareas$: Observable<Tarea[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private TodoService: TodoService, private alertCtrl: AlertController) {
  }

  ionViewWillEnter(){

    //this.contacts=this.ContactService.getContacts();
 
    this.tareas$ = this.TodoService
      .getTarea()  //Retorna la DB
      .snapshotChanges() //retorna los cambios en la DB (key and value)
      .map(
        /*
        Estas líneas retornan un array de  objetos con el id del registro y su contenido
        {
          "key":"value",
          contact.name,
          contact.organization,
          ...
        }
        */
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
 
   onItemTappedtarea($event, tareap){
     this.navCtrl.push(VerTodoPage, tareap);
    
 
   }

}
