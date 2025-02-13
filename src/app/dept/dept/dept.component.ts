import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { DepartmentComponent } from './departments.component';
@Component({
  selector: 'app-dept',
  imports: [RouterLink,RouterOutlet,DepartmentComponent],
  templateUrl: './dept.component.html',
  styleUrl: './dept.component.css'
})
export class DeptComponent {

  constructor(public router:Router)
  {

  }

}
