import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';

var classe = "";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  items: Projet[] = [];
  private swipeCoord: [number, number];
  
  constructor() { }

  ngOnInit(): void {
    this.initProjects();
    this.scrollNav();
  }

  initProjects(){
    this.items= [
      {
        imgPath : "assets/img/Blog-felin.png",
        link :"https://github.com/BihanMathieu/Blog_felin",
        title : "Blog Félin",
        alt: "image félin",
        text: "HTML/CSS/JS/PHP/SQL "
      },
      {
        imgPath : "assets/img/Rocket-launch.png",
        link :"https://github.com/BihanMathieu/JS-Rocket-launch",
        title : "Rocket launch",
        alt: "image fusée",
        text: "CSS/JS"
      },
      {
        imgPath : "assets/img/ToDoList.png",
        link:"https://github.com/BihanMathieu/Java-ToDoList",
        title : "To Do List",
        alt: "image to do list",
        text: "JAVA"
      },{
        imgPath : "assets/img/Zombi.png",
        link :"https://github.com/BihanMathieu/JS-Zombie",
        title : "Zombi",
        alt: "image zombi",
        text: "HTML/CSS/JS"
      },{
        imgPath : "assets/img/Chronometre.png",
        link :"https://github.com/BihanMathieu/JS-Chronom-tre",
        title : "Chronomètre",
        alt: "image de montre",
        text: "HTML/JS"
      },{
        imgPath : "assets/img/Chronometre.png",
        link :"https://github.com/BihanMathieu/JS-Chronom-tre",
        title : "Portfolio",
        alt: "image de montre",
        text: "Angular"
      },
    ]
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


  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];

    if (when === 'start') {
      this.swipeCoord = coord;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];

      if ( //
         Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          const swipe = direction[0] < 0 ? 'next' : 'previous';
          // Do whatever you want with swipe
      }
    }
  }
}

  export interface  Projet {
    imgPath :string;
    link :string;
    title : string;
    alt: string;
    text: string;
  }
