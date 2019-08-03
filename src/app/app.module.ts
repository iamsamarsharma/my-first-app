import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server-component';
import {ServersComponent} from './servers/servers.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import { SuccessMessageComponent } from './success-message/success-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessMessageComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
