import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'log-in',
        loadComponent: () => import('@modules/auth/pages/log-in-page/log-in-page.component').then(c => c.LogInPageComponent)
    },
    {
        path: 'search',
        loadComponent: () => import('@modules/search/pages/search-page/search-page.component').then(c => c.SearchPageComponent),
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'log-in'
    }
];
