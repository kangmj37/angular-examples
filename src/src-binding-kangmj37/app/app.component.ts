import { Component, OnInit } from '@angular/core';

import { Colors } from './colors'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Binding kangmj37 Examples';
    colors: Colors;
    backgroundColor: string;

    private setBackgroundColor() {
        this.backgroundColor = `rgb(${this.colors['red']}, ${this.colors['green']}, ${this.colors['blue']})`;
    }

    onColorChange(color:string, value:number) {
        this.colors[color] = value;
        this.setBackgroundColor();
    }
    
    getColorKeys(): string[] {
        console.log(this.colors);
        return Object.keys(this.colors);
    }

    ngOnInit() {
        this.colors = { 'red':128, 'green':128, 'blue':128 }
        this.setBackgroundColor();
    }
}
