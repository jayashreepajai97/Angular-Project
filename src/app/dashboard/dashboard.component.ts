import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//  number:number;
//  name:any="jayashreepajai97";
 
  constructor(private router: Router) { }

  ngOnInit() {
  
  }
//   change(){

//   }
//   set(event:number){
//     this.number=event;
//     switch(this.number){
        
//         case 0:
//                  this.router.navigate(['/side-nav/crumb']);
//                 break;
//         case 1:
//                  this.router.navigate(['/sidenav/solutionb']);
//                  break;
//         case 2:                 
//                  this.router.navigate(['/dashboard/moduler']);
//                 break;
//         case 3:
//                 this.router.navigate(['/dashboard/colortype']);
//                 break;
//         case 4: this.router.navigate(['/dashboard/production']);
//                 break;
//         case 5:this.router.navigate(['/dashboard/payroll']);
//                 break;
//         default:alert("error");
//     }
//   }
// }
}
