import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 12;

  screendisplay=false;
  getval()
  {
    return "My name is Abdul Rafay"
  }

  getName(name:string | number){
    alert(name);
  }


  getData(newval:string){
    console.warn(newval);
  }

  displayvalue='';

getvalue(na:string){
    console.warn(na);
    this.displayvalue = na;
}


count=0;
counter(type:string){
  type==='add'?this.count++:this.count--;
}

namee='hi';
disable=false;


show='yes';


color='green';


shape="noshape";

classmates = ['umair', 'hussnain', 'ali', 'umar', 'haris', 'adeel'];
classmatesDetails = [
  {name:'umair', phone:'03325556630', education:'bachelors'},
  {name:'hussnain', phone:'03325556630', education:'bachelors'}
]


users=[
  {name:'umair', phone:'03325556630', education:'bachelors',acc:['facebook','gmail','twiter']},
  {name:'hussnain', phone:'03325556630', education:'bachelors',acc:['yahoo','1','21']}
]


updatecolor()
{
  this.color="red";
}

bgColor="black";

updateBackgroundColor()
{
  this.bgColor="yellow";
}


chilData = 10;
updateValue()
{
  this.chilData = Math.floor(Math.random()*10);
}



usersDetails=
[
  {name:'Abdul Rafay', email:'rafayabdul252@gmail.com'},
  {name:'Umair Ansar', email:'ansarumair524@gmail.com'},
  {name:'Hussnain Shakeel', email:'hussnainbutt776@gmail.com'}
]

newDataInChild='x';
newdata(newitem:string){
  
this.newDataInChild=newitem;
}
}
