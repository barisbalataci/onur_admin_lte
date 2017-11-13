import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  LayoutAuthComponent, LayoutLoginComponent, LayoutRegisterComponent } from 'ngx-admin-lte';

import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResearchComponent } from './pages/research/research.component';
import {PublicationsComponent} from './pages/publications/publications.component';
import { CvComponent } from './pages/cv/cv.component';

const routes: Routes = [
   {
    children: [
      {
        component: HomeComponent,
        path: ''
      },
      {
        component: HomeComponent,
        path: 'home'
      },
      {
        component: PageNumComponent,
        path: 'page/:id'
      },
      {
        component: ContactComponent,
        path: 'contact'
      },
      {
        component: ResearchComponent,
        path: 'research'
      },
      {
        component: PublicationsComponent,
        path: 'publications'
      },
      {
        component: CvComponent,
        path : 'cv'
      }

    ],
    component: LayoutAuthComponent,
    data: [{
      'skin': 'skin-black',
      'display_tasks': false,
      'display_control': false,
      'display_user': false,
      'display_messages': false,
      'display_notifications': false,
      //'display_menu_user': false,
      'display_menu_search': false,
      'display_logout': true,
    }],
    path: '',
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
