import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LegislationComponent } from './legislation/legislation.component';
import { CaselawsComponent } from './caselaws/caselaws.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { HeaderbuttonsComponent } from './headerbuttons/headerbuttons.component';
import { MainComponent } from './main/main.component';
import { MainbuttonComponent } from './mainbutton/mainbutton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotComponent } from './bot/bot.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    LegislationComponent,
    CaselawsComponent,
    ContactusComponent,
    HeaderComponent,
    HeaderbuttonsComponent,
    MainComponent,
    MainbuttonComponent,
    BotComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
