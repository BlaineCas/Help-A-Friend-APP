import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiService } from './services/github-api.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserRepoComponent } from './components/user-repo/user-repo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CachingService } from './services/caching.service';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserDetailsComponent, UserCardComponent, UserRepoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [GithubApiService, CachingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
