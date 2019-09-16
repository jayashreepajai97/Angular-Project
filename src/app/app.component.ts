import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prj';
  Num:any;
 name:any="user234";

 set(event:any)
 {
   this.Num=event;
 }
}
