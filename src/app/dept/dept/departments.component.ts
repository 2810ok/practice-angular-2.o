import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
    imports:[RouterLink,RouterLinkActive,CommonModule],
  selector: 'department-component',
  template: '<p id="text" *ngIf="title != null" style="margin: 200px 300px; font-size: 24px;">Welcome to {{ title }} department</p>'
})
export class DepartmentComponent implements OnInit {
  title: string='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.title = params['title']; 
      
    });
    //this.title = this.route.snapshot.params['title'];

  }
}