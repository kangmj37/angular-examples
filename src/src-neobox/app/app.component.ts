import { Component, OnInit } from '@angular/core';

import { System } from './system';
import { SystemService } from './system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.layout.css' , './app.component.foundation.css']
})
export class AppComponent implements OnInit {
  system: System;

  constructor(private systemService: SystemService) { 
    //let system = this.systemService.getEmptySystem() as System;
    //this.system = system; 
    //console.log(system);
  }

  ngOnInit(): void {
    this.systemService.getSystem().then(system => 
      { this.system = system; console.log(system); } 
    )
  }

  Serialnum(): void {
  }

  applyClick_1(): void {
  }
  
  applyClick_2(): void {
  }
  
  applyClick_3(): void {
  }
}
