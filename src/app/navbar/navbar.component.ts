import { Component, OnInit} from '@angular/core';

var classe = "";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.scrollNav();
  }
  
  scrollNav(){
    if(window.scrollY >  1){
      classe = "fixed"
    }else if (window.scrollY == 0){
      classe ="";
    }
    return classe;    
  }

  intervalId: NodeJS.Timeout = setInterval(() => {
    this.scrollNav();
  }, 50); 

    unchecked(){
      console.log("coucou");
      const checkbox = document.getElementById("checkbox") as HTMLInputElement ;
      console.log(checkbox);
      checkbox!.checked = false;
    }

}


