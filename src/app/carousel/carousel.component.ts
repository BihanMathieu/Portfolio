import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  items: Projet[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initProjects();
    this.swipe();
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
        imgPath : "assets/img/Puissance4.svg.png",
        link :"https://github.com/BihanMathieu/JS-Puissance4",
        title : "Puissance4",
        alt: "image de puissance 4",
        text: "HTML/CSS/JS"
      },
    ]
  }

  swipe(): void {
    const carouselInner =  document.querySelector<HTMLElement>(".carousel-inner");
    const carouselNext = document.querySelector<HTMLElement>(".carousel-control-next");
    const carouselPrev = document.querySelector<HTMLElement>(".carousel-control-prev");
    const cardWidth = (carouselInner!.scrollWidth/3)-10;
    const carouselWidth = cardWidth*this.items.length;
    console.log(cardWidth);
    console.log(carouselWidth);

    
  
    let scrollPosition = 0;
    console.log(scrollPosition);

    carouselNext!.addEventListener("click", function () {
      if (scrollPosition < carouselWidth - cardWidth! * 4) {
        console.log("next");
        scrollPosition += cardWidth!;
        carouselInner!.scrollLeft = scrollPosition;
        console.log(scrollPosition);
      }
    });
    carouselPrev!.addEventListener("click", function () {
      if (scrollPosition > 0) {
        console.log("prev");
        scrollPosition -= cardWidth!;
        carouselInner!.scrollLeft = scrollPosition;
        console.log(scrollPosition);
      }
    });
  }
}

export interface  Projet {
  imgPath :string;
  link :string;
  title : string;
  alt: string;
  text: string;
}

