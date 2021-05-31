import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caluclator',
  templateUrl: './caluclator.component.html',
  styleUrls: ['./caluclator.component.scss']
})
export class CaluclatorComponent implements OnInit {

//ngModel Values
income=100000;
expense=0;
  constructor() { }

  ngOnInit(): void {
  }

}
