import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AccueilComponent } from './shared/accueil/accueil/accueil.component';
import { HomeComponent } from './shared/home/home/home.component';
import { LoginComponent } from './shared/login/login/login.component';
import { NotfoundComponent } from './not-found/notfound/notfound.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HomeEventsComponent } from './home-events/home-events.component';
import { AddeventComponent } from './events/addevent/addevent.component';
import { UpdateEventComponent } from './events/update-event/update-event.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { ShowAllEventComponent } from './events/show-all-event/show-all-event.component';
import { DialogEvent, EditDialogEvent, EventComponent } from './event/event.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddLogisticsComponent,EditLogistics } from './logistics/logistics.component'; 
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'environments/environment';
import { OcteamComponent } from './octeam/octeam.component';





@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    
  ],
  declarations: [
    ShowAllEventComponent,
    AppComponent,
    AdminLayoutComponent,
    AccueilComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    UserLayoutComponent,
    HomeEventsComponent,
    AddeventComponent,
    UpdateEventComponent,
    EventComponent,
    DialogEvent,
    EditDialogEvent, 
    AddLogisticsComponent,
    EditLogistics,
    OcteamComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
