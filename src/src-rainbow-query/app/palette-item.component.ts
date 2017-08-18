import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
    selector: 'palette-item-component',
    // <input [ngModel]="color" (change)="onChange($event)" placeholder="color"/>
    template: `
        <input [value]="color" (change)="onChange($event)" placeholder="color"/>
        <div [style.background]="color"></div>
    `,
    styles: [`
    input {
        padding: 0;
        border: 1px solid #ccc;
        width: 98px;
    }
    div {
        width: 100px;
        height: 100px;
    }
    `]
})
export class PaletteItemComponent {
    _color:string = 'black'

    constructor(private route: ActivatedRoute) {
        console.log(`${this.constructor.name}::new`);
    }

    // @Input() color:string = 'black';

    // accessor
    get color():string {
        return this._color;
    }
    @Input() set color(value:string) {
        console.log(`${this.constructor.name}::color binded property set: ${value}`);
        this._color = value;
        if (this._color != value) {
            console.log(`* ${this._color} -> ${value}`);
        }
    } 
    @Output() colorChange = new EventEmitter<string>();

    onChange(event: Event) {
        let color = (event.target as HTMLInputElement).value;
        console.log(`${this.constructor.name}::onChange: palette color = ${color}`);

        this._color = color;

        this.colorChange.emit(color);

        //this.colors[index] = value;
        // let queryParams = this.colors2queryParams(this.colors);

        // this.router.navigate(['./'], {queryParams:queryParams});
    }
}