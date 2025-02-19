import { Component, Signal, signal } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users = signal<any[]>([]);
  since = signal(0);
  perPage = 10;

  constructor(private githubService: GithubApiService, private router: Router) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.githubService.getUsers(this.since(), this.perPage).subscribe((newUsers) => {
      this.users.update((currentUsers) => [...currentUsers, ...newUsers]);
    });
  }

  public onCardClick(id: string): void {
    this.router.navigate(['/users', id]);
  }

  public loadMoreUsers(): void {
    const lastUser = this.users().length > 0 ? this.users()[this.users().length - 1] : null;
    if (lastUser) {
      this.since.update((since) => lastUser.id);
      this.loadUsers();
    }
  }
}
