import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ListUtilisateurs } from './core/list-utilisateurs/list-utilisateurs';
import { DetailsUtilisateur } from './core/details-utilisateur/details-utilisateur';
import { Layout } from './dashboard/layout/layout';
import { Home } from './home/home';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path : '',
        component : Dashboard,
        children : [
            {
                path : '',
                component : Layout,
                children : [
                    {
                        path : 'list-utilisateurs',
                        component : ListUtilisateurs,
                    },
                    {
                        path : 'details-utilisateur/:id',
                        component : DetailsUtilisateur,
                    },
                    {
                        path : '',
                        redirectTo : 'list-utilisateurs',
                        pathMatch: 'full'
                    }
                ]
            },
        ]
    },
    {
        path : 'home',
        component : Home
    },
    {
        path : 'login',
        component : Login
    }
];
