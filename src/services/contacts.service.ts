import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Contacto } from "../models/contacto.model";

@Injectable()
export class ContactService{

    private contactsRef=this.db.list<Contacto>('Contacto');

    constructor(private db:AngularFireDatabase){

    }

    addContact(value: Contacto){
    
        return this.contactsRef.push(value);
    }

    updateContact(value: Contacto){

        return this.contactsRef.update(value.key,value);
    }

    removeContact(value: Contacto){
        
        return this.contactsRef.remove(value.key);
    }

    getContacts(){
        
        return this.contactsRef;
    }
}