import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contacts.service';
import { Contacto } from '../../models/contacto.model';



/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-contacto',
  templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {



  constructor(public navCtrl: NavController, private contactService: ContactService) {

   
  }

  onAddContact(value: Contacto){

    this.contactService.addContact(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }

 

}
