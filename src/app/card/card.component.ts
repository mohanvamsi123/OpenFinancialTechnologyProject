import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  //color will be received for app.component
  @Input() color:string;
  //image2 url will be received for app.component
  @Input() image2:string;
  constructor() { }

  ngOnInit(): void {
  }

}
