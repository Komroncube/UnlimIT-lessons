import { Routes } from '@angular/router';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { BestPracticesComponent } from './components/best-practices/best-practices.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';

export const routes: Routes = [
    {
        path: 'playground',
        component: PlaygroundComponent
    },
    {
        path: '',
        redirectTo: '/playground',
        pathMatch: 'full'
    },
    {
        path: 'best-practices',
        component: BestPracticesComponent
    },
    {
        path: 'ng-template',
        component: NgTemplateComponent
    },
    {
        path: 'ng-content',
        component: NgContentComponent
    }
];
