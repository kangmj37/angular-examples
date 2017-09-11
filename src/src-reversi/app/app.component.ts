import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello Reversi';
  blocks: string[];
  order: string;

  constructor() {
    this.order = 'white';
    this.blocks = new Array(64);
  }

  ngOnInit() {
    this.allHide();
    
    /* 34, 35, 42, 43 visible */
    this.setVisible(document.getElementById("34").children[1] as HTMLElement);
    this.setVisible(document.getElementById("35").children[0] as HTMLElement);
    this.setVisible(document.getElementById("42").children[0] as HTMLElement);
    this.setVisible(document.getElementById("43").children[0] as HTMLElement);
  }

  setHide(element: HTMLElement): void {
    element.style.visibility = 'hidden';
  }
  
  setVisible(element: HTMLElement): void {
    element.style.visibility = 'visible';
  }

  allHide(): void {
//  this.blocks.forEach((_, idx) => {
    for (let i = 0; i < this.blocks.length; i++) {
      let element = document.getElementById(i.toString());
      for (let i = 0; i < element.children.length; i++)
        this.setHide(element.children[i] as HTMLElement);
    }
//  });
  }
}
