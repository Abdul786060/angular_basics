import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-element-show-and-hide-tag',
  templateUrl: './toggle-element-show-and-hide-tag.component.html',
  styleUrls: ['./toggle-element-show-and-hide-tag.component.css']
})
export class ToggleElementShowAndHideTagComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display=true;
  toggle(){
    this.display=!this.display;
  }

}
