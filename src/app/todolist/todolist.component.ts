import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
datastore:any[]=[];
  addTask(data:string){
      this.datastore.push({id:this.datastore.length,name:data});
      console.warn(this.datastore);
  }

  removeTask(id:number){
      this.datastore=this.datastore.filter(data=>data.id!==id);
  }

}
