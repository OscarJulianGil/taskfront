import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './pages/master/master.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
import { ToastComponent } from './components/common/toast/toast.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRightOnRectangle } from '@ng-icons/heroicons/outline';
import { heroCalendarDays } from '@ng-icons/heroicons/outline';
import { heroTrash } from '@ng-icons/heroicons/outline';
import { heroCheckCircle } from '@ng-icons/heroicons/outline';


import { TabletaskComponent } from './components/tabletask/tabletask.component';
import { RegistertaskComponent } from './components/registertask/registertask.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    SigninComponent,
    SpinnerComponent,
    ToastComponent,
    TabletaskComponent,
    RegistertaskComponent,
    RegisteruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgIconsModule.withIcons({ heroArrowRightOnRectangle,heroCalendarDays,heroTrash,heroCheckCircle }),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
