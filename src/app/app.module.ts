import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { ToggleElementShowAndHideTagComponent } from './toggle-element-show-and-hide-tag/toggle-element-show-and-hide-tag.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { TodolistComponent } from './todolist/todolist.component';
import { ChildComponent } from './child/child.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormCreateComponent,
    ToggleElementShowAndHideTagComponent,
    TodolistComponent,
    ChildComponent,
    UserDetailComponent,
    LearnPipeComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
