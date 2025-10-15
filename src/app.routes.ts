import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { CHome } from '@/pages/c-home/c-home';
import { groupMatcher, productMatcher } from '@/routes/matchers';
import { CGroup } from '@/pages/c-group/c-group';
import { CItem } from '@/pages/c-item/c-item';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    // View categorized products group page
    {
        matcher: groupMatcher,
        component: CGroup
      },
      // View product page
      {
        matcher: productMatcher,
        component: CItem
      },
    { path: 'landing', component: Landing },
    { path: 'home', component: CHome },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
