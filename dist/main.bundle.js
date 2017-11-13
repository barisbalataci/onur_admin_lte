webpackJsonp([1,5],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(480),
        styles: [__webpack_require__(451)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CvComponent = (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    return CvComponent;
}());
CvComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-cv',
        template: __webpack_require__(481),
        styles: [__webpack_require__(452)]
    }),
    __metadata("design:paramtypes", [])
], CvComponent);

//# sourceMappingURL=cv.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(msgServ, breadServ) {
        this.msgServ = msgServ;
        this.breadServ = breadServ;
        this.date = new Date();
        // TODO
    }
    HomeComponent.prototype.ngOnInit = function () {
        // setttings the header for the home
        this.breadServ.setCurrent({
            description: 'HomePage',
            display: true,
            header: 'Dashboard',
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: 'Home'
                }
            ]
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // removing the header
        this.breadServ.clear();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        styles: [__webpack_require__(453)],
        template: __webpack_require__(482)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["i" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["i" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["h" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["h" /* BreadcrumbService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_admin_lte__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNumComponent = (function () {
    function PageNumComponent(route, breadServ) {
        this.route = route;
        this.breadServ = breadServ;
        this.id = 0;
        // TODO
    }
    PageNumComponent.prototype.ngOnInit = function () {
        var _this = this;
        // when calling routes change
        var idkey = 'id';
        this.sub = this.route.params.subscribe(function (data) {
            _this.id = data[idkey];
            // changing header
            _this.breadServ.setCurrent({
                description: 'This is our ' + _this.id + ' page',
                display: true,
                levels: [
                    {
                        icon: 'dashboard',
                        link: ['/'],
                        title: 'Home'
                    },
                    {
                        icon: 'clock-o',
                        link: ['/page/' + _this.id],
                        title: 'Page ' + _this.id
                    }
                ]
            });
        });
    };
    PageNumComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.breadServ.clear();
        this.route = null;
    };
    return PageNumComponent;
}());
PageNumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-num',
        styles: [__webpack_require__(454)],
        template: __webpack_require__(483)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_admin_lte__["h" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_admin_lte__["h" /* BreadcrumbService */]) === "function" && _b || Object])
], PageNumComponent);

var _a, _b;
//# sourceMappingURL=page-num.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicationsComponent = (function () {
    function PublicationsComponent() {
    }
    PublicationsComponent.prototype.ngOnInit = function () {
    };
    return PublicationsComponent;
}());
PublicationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-publications',
        template: __webpack_require__(484),
        styles: [__webpack_require__(455)]
    }),
    __metadata("design:paramtypes", [])
], PublicationsComponent);

//# sourceMappingURL=publications.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResearchComponent = (function () {
    function ResearchComponent() {
    }
    ResearchComponent.prototype.ngOnInit = function () {
    };
    return ResearchComponent;
}());
ResearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-research',
        template: __webpack_require__(485),
        styles: [__webpack_require__(456)]
    }),
    __metadata("design:paramtypes", [])
], ResearchComponent);

//# sourceMappingURL=research.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuWidgetComponent = (function () {
    function MenuWidgetComponent() {
        this.label = '';
    }
    MenuWidgetComponent.prototype.ngOnInit = function () {
    };
    return MenuWidgetComponent;
}());
MenuWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-menu-widget',
        template: __webpack_require__(486),
        styles: [__webpack_require__(457)]
    }),
    __metadata("design:paramtypes", [])
], MenuWidgetComponent);

//# sourceMappingURL=menu-widget.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 241;


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(280);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_menu_widget_menu_widget_component__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(footerServ, userService, menuServ, logoServ) {
        this.footerServ = footerServ;
        this.userService = userService;
        this.menuServ = menuServ;
        this.logoServ = logoServ;
        // define your footer links
        this.footer = {
            left_part: "<strong>\n        Copyright &copy; 2017\n        <a href=\"http://www.weberantoine.fr\" >WEBER Antoine</a>.\n    \t</strong>\n      Open-source Sharing",
            right_part: 'Bootstrapping Ngx-Admin-LTE',
        };
        // define here your own links menu structure
        this.mylinks = [
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
                class: __WEBPACK_IMPORTED_MODULE_2__widgets_menu_widget_menu_widget_component__["a" /* MenuWidgetComponent */],
                data: {
                    label: 'test widget'
                }
            }
        ];
        // define here your logo
        this.logo = {
            html_mini: 'NG<b>X</b>',
            html_lg: '<b>ONUR </b>POLAT',
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        // define menu
        this.menuServ.setCurrent(this.mylinks);
        this.footerServ.setCurrent(this.footer);
        this.logoServ.setCurrent(this.logo);
        // FAKE MESSAGE
        // defining some test users
        var user1 = new __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["c" /* User */]({
            avatarUrl: 'assets/img/user2-160x160.jpg',
            email: 'weber.antoine.pro@gmail.com',
            firstname: 'Onur',
            lastname: 'POLAT'
        });
        user1.connected = true;
        this.userService.setCurrent(user1);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(479),
        styles: [__webpack_require__(450)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["d" /* FooterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["d" /* FooterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["e" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["e" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["f" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["f" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["g" /* LogoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["g" /* LogoService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_admin_lte__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page_num_page_num_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_research_research_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_publications_publications_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cv_cv_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__widgets_menu_widget_menu_widget_component__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// components

// modules

// les pages






var pages = [
    __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_7__pages_page_num_page_num_component__["a" /* PageNumComponent */],
    __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact_component__["a" /* ContactComponent */],
    __WEBPACK_IMPORTED_MODULE_9__pages_research_research_component__["a" /* ResearchComponent */],
    __WEBPACK_IMPORTED_MODULE_10__pages_publications_publications_component__["a" /* PublicationsComponent */],
    __WEBPACK_IMPORTED_MODULE_11__pages_cv_cv_component__["a" /* CvComponent */]
];
// main bootstrap


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ].concat(pages, [
            __WEBPACK_IMPORTED_MODULE_13__widgets_menu_widget_menu_widget_component__["a" /* MenuWidgetComponent */]
        ]),
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_admin_lte__["a" /* NgxAdminLteModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* routing */]
        ],
        providers: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__widgets_menu_widget_menu_widget_component__["a" /* MenuWidgetComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_page_num_page_num_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_research_research_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_publications_publications_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cv_cv_component__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








var routes = [
    {
        children: [
            {
                component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */],
                path: ''
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */],
                path: 'home'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_3__pages_page_num_page_num_component__["a" /* PageNumComponent */],
                path: 'page/:id'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__["a" /* ContactComponent */],
                path: 'contact'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_5__pages_research_research_component__["a" /* ResearchComponent */],
                path: 'research'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_6__pages_publications_publications_component__["a" /* PublicationsComponent */],
                path: 'publications'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_7__pages_cv_cv_component__["a" /* CvComponent */],
                path: 'cv'
            }
        ],
        component: __WEBPACK_IMPORTED_MODULE_1_ngx_admin_lte__["b" /* LayoutAuthComponent */],
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
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "<p>\n  cv works!\n</p>\n"

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "<p>\n\thome works!\n</p>\n"

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<p>page {{id}} works!</p>\n"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<p>\n  publications works!\n</p>\n"

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "<p>\n  research works!\n</p>\n"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "<li>\n    <i class=\"fa fa-user\"></i>\n    <span>{{label}}</span>\n</li>\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(242);


/***/ })

},[759]);
//# sourceMappingURL=main.bundle.js.map