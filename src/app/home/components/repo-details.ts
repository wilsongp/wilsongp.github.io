import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Repo } from '../models/repo';

@Component({
  selector: 'app-repo-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section fxLayout="column" fxLayoutAlign="center stretch" fxFill>
      <div fxLayout="row wrap" fxLayoutAlign="center center"  fxLayoutAlign.gt-md="space-around center">
        <div>
            <h4 class="card-title">{{repo.name}}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{{repo.description}}</h6>
            <p class="card-text">
              {{repo.pullRequests.totalCount}} Pull Requests
            </p>
            <a [href]="repo.url" target="_blank" class="card-link">Github</a>
            <a *ngIf="repo.homepageUrl" [href]="repo.homepageUrl" target="_blank" class="card-link">Demo</a>
        </div>
        <app-pr-details fxHide.md fxHide.lt-md *ngIf="repo.pullRequests.nodes.length > 0" [pullRequest]="repo.pullRequests.nodes[0]">
        </app-pr-details>
      </div>
    </section>
  `,
  styles: [`
    section {
      margin: 0 0 0 0;
    }
  `]
})
export class RepoDetailsComponent {
  @Input() repo: Repo;

}
