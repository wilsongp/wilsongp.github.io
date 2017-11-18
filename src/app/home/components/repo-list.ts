import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import Color from 'color';

import { Repo } from '../models/repo';

@Component({
  selector: 'app-repo-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="nav flex-column nav-pills" id="repo-list" role="tablist" aria-orientation="vertical">
    <a *ngFor="let repo of repos" href="javascript:void(0);" class="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab"
        (click)="selectRepo.emit(repo.id)" [ngClass]="{'active': repo.id == selected.id}">
      {{repo.name}}
      <span class="badge badge-dark" [ngStyle]="dynamicBadgeStyle(repo)">
        {{repo.primaryLanguage.name}}
      </span>
    </a>
  </div>
  `,
  styles: [`
    .nav {
      margin: 0 1rem 1rem 1rem;
    }

    .badge {
      margin: 0 0 0 .5rem;
    }
  `]
})
export class RepoListComponent {
  @Input() repos: Repo[] = [];
  @Input() selected: Repo = null;

  @Output() selectRepo = new EventEmitter<number>();

  dynamicBadgeStyle(repo: Repo) {
    const langColor = Color(repo.primaryLanguage.color);

    return {
      'background-color': repo.primaryLanguage.color,
      'color': langColor.negate()
    };
  }
}
