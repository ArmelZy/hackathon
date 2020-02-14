import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterSuccessComponent} from './auth/register-success/register-success.component';
import {BodyComponent} from './body/body.component';
import {HomeComponent} from './body/home/home.component';
import {ContactUsComponent} from './body/contact-us/contact-us.component';
import {NoPageFoundComponent} from './no-page-found/no-page-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxWebstorageModule} from "ngx-webstorage";
import {AddAnnounceComponent} from './body/add-announce/add-announce.component';
import {HttpClientInterceptor} from "./http-client-interceptor";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CarouselComponent} from './body/home/carousel/carousel.component';
import {AnnounceComponent} from './body/announce/announce.component';
import {FaqComponent} from './body/faq/faq.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    BodyComponent,
    HomeComponent,
    ContactUsComponent,
    NoPageFoundComponent,
    AddAnnounceComponent,
    CarouselComponent,
    AnnounceComponent,
    FaqComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
