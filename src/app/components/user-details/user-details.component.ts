import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../services/github-api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  username: string = '';
  userType: string = '';
  repositories: any[] = [];

  constructor(private route: ActivatedRoute, private githubService: GithubApiService) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username') || '';

    // Fetch user details
    this.githubService.getUser(this.username).subscribe((user: any) => {
      this.userType = user.type;
    });

    this.githubService.getUserRepositories(this.username).subscribe((repos: any) => {
      this.repositories = repos;
    });
  }
}
