import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({

  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  number: number;
  public $: any;
  name: any = "jayashreepajai97";
  show: boolean = false;
  constructor(private router: Router) { }

  count = 0;
  openModel() {
    if(this.count==0){
      this.show = true;
      this.count ++;
    }else{
      this.count--;
      this.show = false;
    }
  }
  ngOnInit() {
   
  }



  set(event: number) {
    this.number = event;
    switch (this.number) {

      case 0:
        this.router.navigate(['/sidenav/crumb']);
        break;
      case 1:
        this.router.navigate(['/sidenav/solutionb']);
        break;
      case 2:
        this.router.navigate(['/sidenav/moduler']);
        break;
      case 3:
        this.router.navigate(['/sidenav/colortype/color-name']);
        break;

      case 4:
        this.router.navigate(['/sidenav/colortype/color-code']);
        break;

      case 5: this.router.navigate(['/sidenav/production']);
        break;
      case 6: this.router.navigate(['/sidenav/payroll']);
        break;
      default: alert("error");
    }
  }
}





























