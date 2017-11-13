
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';

// modules
import { NgxAdminLteModule } from 'ngx-admin-lte';

// les pages
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResearchComponent } from './pages/research/research.component';
import {PublicationsComponent} from './pages/publications/publications.component';
import { CvComponent } from './pages/cv/cv.component';

const pages = [
    HomeComponent,
    PageNumComponent,
    ContactComponent,
    ResearchComponent,
    PublicationsComponent,
    CvComponent
];

// main bootstrap
import { routing } from './app.routes';
import { MenuWidgetComponent } from './widgets/menu-widget/menu-widget.component';



@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    MenuWidgetComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxAdminLteModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    MenuWidgetComponent
  ]
})
export class AppModule { }
