import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'palette-item-component',
    template: `<div [style.background]="background"></div>`,
    styles: [`
    div {
        width: 100px;
        height: 100px;
    }
    `]
})

export class PaletteItemComponent implements OnInit {
    background:string = "grey";

    constructor(private route:ActivatedRoute) {}

    ngOnInit() {
        console.log('palette item component Init.');    // component new oer secondary outlet... 
        this.route.queryParams.subscribe(params =>{
        //this.route.params.subscribe(params =>{
            console.log(`------ params['background'] = ${params['background']}`);
            //this.background = params['background'];
        });
    }
}
