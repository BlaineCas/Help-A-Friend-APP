import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiService } from './services/github-api.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, UserListComponent, UserDetailsComponent, UserCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GithubApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
