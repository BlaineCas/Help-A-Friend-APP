import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../services/github-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  username: string = '';
  user$: Observable<any>;
  repos$: Observable<any[]>;

  constructor(private route: ActivatedRoute, private githubService: GithubApiService) {
    {
      this.username = this.route.snapshot.paramMap.get('username') || '';
      this.user$ = this.githubService.getUser(this.username);
      this.repos$ = this.githubService.getUserRepositories(this.username);
    }
  }
}
