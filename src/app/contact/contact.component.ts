import { Component, ElementRef, ViewChild } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Subject } from 'rxjs';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import {environment} from "../../environments/environment";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  staticAlertClosed = false;
  successMessage = 'Message envoyée';
  messageEnvoye = false;

  @ViewChild('selfClosingAlert') selfClosingAlert: NgbAlert;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('message') message: ElementRef;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_xgm9j2m', 'template_lo6pxoe', e.target as HTMLFormElement, environment.EMAIL_JS_KEY)
      .then((result: EmailJSResponseStatus) => {
        this.envoiReussi();
      }, (error) => {
        console.log(error.text);
      });
  }

  envoiReussi(){
    this.modal();
    this.viderFormulaire();
  }
  modal(){
    this.messageEnvoye = true;
    setTimeout(() => this.selfClosingAlert.close(), 4000);
	}

  viderFormulaire() {
    this.name.nativeElement.value='';
    this.email.nativeElement.value='';
    this.message.nativeElement.value='';
  }
  
}

