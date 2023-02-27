import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { __values } from 'tslib';
import {environment} from "../../environments/environment";


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  ngOnInit() {
    this.valideForm();
  }

  staticAlertClosed = false;
  successMessage = 'Message envoyée';
  messageEnvoye = false;
  error = ""

  @ViewChild('selfClosingAlert') selfClosingAlert: NgbAlert;
  name:string;
  email:string;
  message:string;

  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e);
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
    const form:Record<string, unknown> = {
      name:this.name,
      email:this.email,
      message:this.message
    }
    if(this.valideEmail()){
      emailjs.send('service_xgm9j2m', 'template_lo6pxoe', form, environment.EMAIL_JS_KEY)
      .then((result: EmailJSResponseStatus) => {
        this.envoiReussi();
      }, (error) => {
        console.log(error.text);
      });
    }
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
    this.name ='';
    this.email ='';
    this.message ='';
  }
  valideForm(){
    if(!this.name || !this.email || !this.message){
      return false
    }else{
      return true
    }
  }
  valideEmail():boolean{
    console.log("coucou");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(this.email)) {
      this.error='';
      return true;
    } else {
      this.error = "Cette email n'est pas valide";
      return false;
    }
  }



}