import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  bgColor1 = 'Normal';
  bgColor2 = 'Normal';
  bgColor3 = 'Normal';
  bgColor4 = 'Normal';
  bgColor5 = 'Normal';
  scrollClass="scroll-Init";

  constructor(){

  }

  //used host listenr to track the scroll event performed by the user.
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    //if the page offset value of the Y-axis is greater than when it means that user has scrolled the webpage
    if(window.pageYOffset>1){
      //then we will change the class of the navbar to scrolled (scrolled class is present in app.component.scss)
      this.scrollClass="scrolled";
    }else{
       //then we will change the class of the navbar to scroll-Init (scroll-Init class is present in app.component.scss)
      this.scrollClass="scroll-Init"
    }
  }
  


}

