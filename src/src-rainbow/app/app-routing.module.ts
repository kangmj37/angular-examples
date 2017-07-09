import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaletteItemComponent } from './palette-item.component';

const routes: Routes = [
  {
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [AppComponent];