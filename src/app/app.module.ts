import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '././app.component';
import { CardsComponent } from './component/cards/cards.component';
import { UsersComponent } from './component/users/users.component';
import { NewcardsComponent } from './component/newcards/newcards.component';
import { ImportantComponent } from './component/important/important.component';

//injection du FormsModule
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegisterComponent } from './component/register/register.component';

//firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore'

//flash message
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    UsersComponent,
    NewcardsComponent,
    ImportantComponent,
    NavbarComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), //conecté lia l'app m3a had la BD li lconfig dyalha hia environment.firebase
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
