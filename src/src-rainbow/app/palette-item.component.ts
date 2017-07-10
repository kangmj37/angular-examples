import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
<<<<<<< HEAD
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
=======
    template: `<div [style.background]="background"></div>`,
    styles: [`
    div {
        width: 100px;
        height: 100px;
>>>>>>> d6cbf9957cd0649003f8a1c0503cf68db04d7537
    }
    `]
})

export class PaletteItemComponent implements OnInit {
<<<<<<< HEAD
    private color: string;
    private editColor: string;
    
    constructor(private route:ActivatedRoute, private router:Router) {
    }

    onChange(event: KeyboardEvent) {
		let inputColor = (<HTMLInputElement>event.target).value;
		let outletName = this.route.outlet;
		this.router.navigate([{outlets: {[outletName]:[inputColor]}}]);
    }
=======
    background:string = "grey";

    constructor(private route:ActivatedRoute) {}
>>>>>>> d6cbf9957cd0649003f8a1c0503cf68db04d7537

    ngOnInit() {
        console.log('palette item component Init.');    // component new oer secondary outlet... 
        this.route.params.subscribe(params =>{
<<<<<<< HEAD
            this.color = params['color'];
=======
            console.log(`------ params['background'] = ${params['background']}`);
            this.background = params['background'];
>>>>>>> d6cbf9957cd0649003f8a1c0503cf68db04d7537
        });
    }
}
