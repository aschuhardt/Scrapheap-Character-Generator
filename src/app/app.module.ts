import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatService } from './stat.service';
import { ProfessionService } from './profession.service';
import { RaceService } from './race.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        ProfessionService,
        RaceService,
        StatService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
