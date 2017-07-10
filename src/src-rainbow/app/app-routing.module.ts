import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaletteItemComponent } from './palette-item.component';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: ':color',
    // asterisk  impossible ?
    outlet: 'ro1',
    component: PaletteItemComponent
  },
  {
    path: ':color',
    outlet: 'ro2',
    component: PaletteItemComponent
  },
  {
    path: ':color',
    outlet: 'ro3',
    component: PaletteItemComponent
  },
  {
    path: ':color',
    outlet: 'ro4',
    component: PaletteItemComponent
  },
  {
    path: ':color',
    outlet: 'ro5',
    component: PaletteItemComponent
  },
  {
    path: ':color',
    outlet: 'ro6',
    component: PaletteItemComponent
  },
  {
    path: ':color',
    outlet: 'ro7',
    component: PaletteItemComponent
=======
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p1'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p2'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p3'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p4'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p5'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p6'
  },
  {
    path: ':background',
    component: PaletteItemComponent,
    outlet: 'p7'
>>>>>>> d6cbf9957cd0649003f8a1c0503cf68db04d7537
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [AppComponent];