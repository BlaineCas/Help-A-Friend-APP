import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrl: './user-repo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRepoComponent {
  @Input() name!: string | null;
  @Input() description!: string | null;
  @Input() visibility!: string | null;
  @Input() language!: string | null;
  @Input() clone_url!: string | null;
}
