import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() avatar_url!: string;
  @Input() username!: string;
  @Input() type!: string;
  @Input() id!: number;
}
