import { Component} from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent{

  openModal(){
    const modal = document.getElementById("exampleModal");
    modal!.style.display = "block";
    modal!.classList.add("show");
  }
  closeModal(){
    const modal = document.getElementById("exampleModal");
    modal!.style.display = "none";
    modal!.classList.remove("show");
  }
}


