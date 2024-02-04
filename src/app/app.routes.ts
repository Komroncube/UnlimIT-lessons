import { Routes } from '@angular/router';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { BestPracticesComponent } from './components/best-practices/best-practices.component';

export const routes: Routes = [
    {
        path: 'playground',
        component: PlaygroundComponent
    },
    {
        path: '',
        redirectTo: '/playground',
        pathMatch: 'full'
        //component: BestPracticesComponent
    }
];
