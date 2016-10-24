import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { RouteComponent }   from './route.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { APP_ROUTES } from './routes';

import { HomeService } from './shared/home.service';


@NgModule({
    imports: [
        BrowserModule, 
        RouterModule.forRoot(APP_ROUTES),
        MaterialModule.forRoot()
        ],
    exports: [RouteComponent],
    declarations: [
        RouteComponent, 
        HomeComponent, 
        AboutComponent, 
        ContactComponent
        ],
    providers: [HomeService],
})
export class RouteModule { }
