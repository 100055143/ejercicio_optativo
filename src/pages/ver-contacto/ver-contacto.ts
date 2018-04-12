import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacto } from '../../models/contacto.model';
import { ContactService } from '../../services/contacts.service';

/**
 * Generated class for the VerContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-contacto',
  templateUrl: 'ver-contacto.html',
})
export class VerContactoPage {

  contact: Contacto;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: ContactService) {

    this.contact = this.navParams.data;
    console.log(this.contact.key);
    
  }

  onUpdateContact(value: Contacto){

    this.contactService.updateContact(value);
    this.navCtrl.pop();

  }

  onRemoveContact(value: Contacto){

    this.contactService.removeContact(value);
    this.navCtrl.pop();

  }

  

}
