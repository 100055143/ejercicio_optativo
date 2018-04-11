import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Todo } from "../models/todo.model";

@Injectable()
export class TodoService{

    private todosRef=this.db.list<Todo>('Todo');


    constructor(private db:AngularFireDatabase){

    }

    addTodo(value: Todo){

        return this.todosRef.push(value);
    }

    updateTodo(value: Todo){

        return this.todosRef.update(value.key,value);
    }

    removeTodo(value: Todo){
        
        return this.todosRef.remove(value.key);
    }

    getTodos(){
        
        return this.todosRef;
    }
}