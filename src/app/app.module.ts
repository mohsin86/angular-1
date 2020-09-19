import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DataBindingComponent } from './learn/data-binding/data-binding.component';
import { CockpitComponent } from './learn/data-binding/cockpit/cockpit.component';
import { ServerElementComponent } from './learn/data-binding/server-element/server-element.component';
import { UsersServices } from './services/users.services';
import { LearnComponent } from './learn/learn.component';
import { SidebarComponent } from './learn/sidebar/sidebar.component';
import { ServicesComponent } from './learn/services/services.component';
import { AuthServices } from './services/auth.services';
import { AuthGuardServices } from './services/auth-guard.services';
import { AcountsComponent } from './learn/services/acounts/acounts.component';
import { NewAccountComponent } from './learn/services/new-account/new-account.component';

// Directive
import {DropdownDirective} from './directive/dropdown-directive';

// Services
import {ShoppingServices} from './services/shopping.services';
import {ServerServices} from './services/server.services';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { UserComponent } from './page/users/user/user.component';
import { ObservableComponent } from './learn/observable/observable.component';
import { DataObservableComponent } from './learn/observable/data-observable/data-observable.component';
import { UserFormComponent } from './page/users/user-form/user-form.component';
import { UserSignUPComponent } from './page/users/user-sign-up/user-sign-up.component';
import { UserDashboardComponent } from './page/users/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DataBindingComponent,
    CockpitComponent,
    ServerElementComponent,
    LearnComponent,
    SidebarComponent,
    DropdownDirective,
    ServicesComponent,
    AcountsComponent,
    NewAccountComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ObservableComponent,
    DataObservableComponent,
    UserFormComponent,
    UserSignUPComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ShoppingServices, ServerServices, UsersServices, AuthServices, AuthGuardServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
