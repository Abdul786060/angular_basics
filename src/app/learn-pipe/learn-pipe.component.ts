import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name="Abdul Rafay";
  today=Date.now();
  str="Hi Angular";
  money = 100;

}
