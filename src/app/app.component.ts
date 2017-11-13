import { Component, OnInit } from '@angular/core';
import {
  User,
  UserService,
  MenuService,
  LogoService,
  FooterService
} from 'ngx-admin-lte';
import { MenuWidgetComponent } from './widgets/menu-widget/menu-widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // define your footer links
  private footer = {
      left_part: `<strong>
        Copyright &copy; 2017
        <a href="http://www.weberantoine.fr" >WEBER Antoine</a>.
    	</strong>
      Open-source Sharing`,
      right_part: 'Bootstrapping Ngx-Admin-LTE',
    };
  // define here your own links menu structure
  private mylinks: any = [
    {
      'title': 'Home',
      'icon': 'home',
      'link': ['/']
    },
    {
      'title': 'Research',
      'icon': 'search',
      'link': ['/research']
    },
    {
      'title': 'Publications',
      'icon': 'book',
      'link': ['/publications']
    }, 
    {
      'title': 'Github',
      'link': ['https://github.com/TwanoO67/ngx-admin-lte'],
      'icon': 'github',
      'external': true,
      'target': '_blank'
    },  
    {
      'title': 'Linkedin',
      'link': ['http://linkedin.com'],
      'icon': 'linkedin',
      'external': true,
      'target': '_blank'
    }, 
    {
      'title': 'Contact',
      'icon': 'phone',
      'link': ['/contact']
    },
    {
      'title': 'CV',
      'icon': 'link',
      'link': ['/cv']
    }, 
    // external widget
    {
      class: MenuWidgetComponent,
      data: {
        label: 'test widget'
      }
    }
  ];
  // define here your logo
  private logo = {
    html_mini: 'NG<b>X</b>',
    html_lg: '<b>ONUR </b>POLAT',
  };

  constructor(
    private footerServ: FooterService,
    private userService:UserService,
    private menuServ: MenuService,
    private logoServ: LogoService,
   // private msgServ: MessagesService,
    //private notifServ: NotificationsService
  ) {

  }

  public ngOnInit() {
    // define menu
    this.menuServ.setCurrent(this.mylinks);
    this.footerServ.setCurrent(this.footer);
    this.logoServ.setCurrent(this.logo);

    // FAKE MESSAGE
    // defining some test users
    const user1 = new User( {
        avatarUrl: 'assets/img/user2-160x160.jpg',
        email: 'weber.antoine.pro@gmail.com',
        firstname: 'Onur',
        lastname: 'POLAT'
    });   

  user1.connected = true;
  this.userService.setCurrent( user1 );
  

  }

}
