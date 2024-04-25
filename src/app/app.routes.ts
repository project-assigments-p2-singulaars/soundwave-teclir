import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DiscoverPageComponent } from './discover-page/discover-page.component';
import { JoinPageComponent } from './join-page/join-page.component';

export const routes: Routes = [
    {
        path:'', component:LandingPageComponent},
        {
            path:'discover-page', component: DiscoverPageComponent},
            {
                path:'join-page', component:JoinPageComponent
            }
];

