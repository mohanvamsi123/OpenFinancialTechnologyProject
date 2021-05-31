import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  scrollClass="scroll-Init";
  constructor() { }

  ngOnInit(): void {
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
