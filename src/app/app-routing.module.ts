import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { LearnComponent } from './learn/learn.component';
import { DataBindingComponent } from './learn/data-binding/data-binding.component';
import { ServicesComponent } from './learn/services/services.component';
import { ObservableComponent } from './learn/observable/observable.component';
import { DataObservableComponent } from './learn/observable/data-observable/data-observable.component';
import { HomeComponent } from './page/home/home.component';
import {UsersComponent  } from './page/users/users.component';
import { UserComponent } from './page/users/user/user.component';
import { UserFormComponent } from './page/users/user-form/user-form.component';
import { UserSignUPComponent } from './page/users/user-sign-up/user-sign-up.component';
import { UserDashboardComponent } from './page/users/user-dashboard/user-dashboard.component';
import { AuthGuardServices } from './services/auth-guard.services';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', component: RecipesComponent},
    {path: 'users', component: UsersComponent,
         children: [
            {path: '', component: UserFormComponent},
            {path: 'login', redirectTo: '', pathMatch: 'full'},
            {path: 'signup', component: UserSignUPComponent},
            {path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuardServices]},
            {path: ':id/:name', component: UserComponent, canActivate: [AuthGuardServices]}
        ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'tutorial',
         component: LearnComponent,
         children: [
             { path: '', redirectTo: 'data-binding', pathMatch: 'full' },
             {
                path: 'data-binding',
                component: DataBindingComponent,
                // outlet: 'DataBinding'
            },
             {
                 path: 'data-services',
                 component: ServicesComponent,
                //  outlet: 'DataServices'
             },
             {
                path: 'observable',
                component: ObservableComponent,
                children: [
                    {path: ':id/:name', component: DataObservableComponent}
                ]
            }
         ]
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
