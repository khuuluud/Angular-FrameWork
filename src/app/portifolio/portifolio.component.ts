import { Component } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent{

  constructor() { 
  }

selectedImage = '';

image: string[] = [
  "/assets/img/poert1.png",
  "/assets/img/port2.png",
  "/assets/img/port3.png",
  "/assets/img/poert1.png",
  "/assets/img/port2.png",
  "/assets/img/port3.png",
 
];

onclick(index: number) {
  this.selectedImage = this.image[index];
 
}

showDetails:boolean=false;

toggleDetails(){
  this.showDetails = !this.showDetails;


}


}
