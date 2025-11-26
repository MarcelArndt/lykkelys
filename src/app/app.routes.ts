import { Routes } from '@angular/router';
import { Inputs } from './inputs/inputs';
import { Buttons } from './buttons/buttons';
import { CardsSection } from './cards-section/cards-section';
import { Sliders } from './sliders/sliders';
import { More } from './more/more';
import { IconsComponent } from './icons/icons';
import { ParallaxSection } from './parallax-section/parallax-section';
import { Start } from './start/start';


export const routes: Routes = [
    {path:"",component:Start},
    {path:"start",component:Start},
    {path:"buttons",component:Buttons},
    {path:"inputs",component:Inputs},
    {path:"cards",component:CardsSection},
    {path:"sliders", component:Sliders},
    {path:"icons", component:IconsComponent},
    {path:"parallax", component: ParallaxSection}

];
