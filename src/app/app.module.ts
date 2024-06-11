import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// provide
import { HttpConfigInterceptor } from 'src/app/provide/http.interceptor';
import { RouteActivate } from 'src/app/provide/route.activate';

// primeNG
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';

// service
import { AuthService } from 'src/app/service/auth.service';
import { AccountService } from 'src/app/service/account.service';
import { CommonService } from 'src/app/service/common.service';
  import {ConfigService} from 'src/app/service/config.service';

// view component
import { NoContentComponent } from 'src/app/view/no-content/no-content.component';
import { LoginSigninComponent } from 'src/app/view/signin/login.signin.component';
import { ContainerComponent } from 'src/app/view/container/container.component';
import { MainComponent } from 'src/app/view/container/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
    LoginSigninComponent,
    ContainerComponent,
    MainComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    TabViewModule,
    TagModule
  ],
  providers: [
    AuthService,
    AccountService,
    CommonService,
    RouteActivate,
    MessageService,
    ConfigService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
