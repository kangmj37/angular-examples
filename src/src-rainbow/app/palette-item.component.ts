import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template: `
    <span>
    <table class='palette-table'>
        <tr>
            <td><input type="text" (change)=onChange($event) value='color'/></td>
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
    
    constructor(private route:ActivatedRoute, private router:Router) {
    }

    onChange(event: KeyboardEvent) {
		let inputColor = (<HTMLInputElement>event.target).value;
		let outletName = this.route.outlet;
		this.router.navigate([{outlets: {[outletName]:[inputColor]}}]);
    }

    ngOnInit() {
        console.log('palette item component Init.');    // component new oer secondary outlet... 
        this.route.params.subscribe(params =>{
            this.color = params['color'];
        });
    }
}
