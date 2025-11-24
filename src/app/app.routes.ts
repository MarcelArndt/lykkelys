import { Routes } from '@angular/router';
import { Inputs } from './inputs/inputs';
import { Buttons } from './buttons/buttons';
import { Cards } from './cards/cards';
import { Sliders } from './sliders/sliders';
import { More } from './more/more';
import { IconsComponent } from './icons/icons';
export const routes: Routes = [
    {path:"",component:Inputs},
    {path:"buttons",component:Buttons},
    {path:"inputs",component:Inputs},
    {path:"cards",component:Cards},
    {path:"sliders", component:Sliders},
    {path:"icons", component:IconsComponent}

];
