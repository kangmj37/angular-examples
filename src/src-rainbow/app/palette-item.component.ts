import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <span>
    <table class='palette-table'>
        <tr>
            <td><input (change)=onChange($event) value={{editColor}}/></td>
        </tr>
        <tr>
            <td [style.background-color]="color"></td>
        </tr>
    </table>
    </span>
    `,
    styles: [`
    .palette-table {
        width: 50px;
        height: 50px;
    }
    `]
})

export class PaletteItemComponent implements OnInit {
    private color: string;
    private editColor: string;
    
    constructor(private route:ActivatedRoute) {
        this.editColor = 'color'
    }

    onChange(event) {}

    ngOnInit() {
        console.log('palette item component Init.');    // second outlet component new... 
        this.route.params.subscribe(params =>{
            this.color = params['color'];
        });
    }
}