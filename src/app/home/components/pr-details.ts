import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PullRequest } from '../models/repo';

@Component({
  selector: 'app-pr-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section fxLayout="column wrap" fxLayoutAlign="start stretch" fxFill>
      <blockquote class="blockquote">Recent Commits</blockquote>
      <div>
        <ul class="list-group">
          <a [href]="commitNode.commit.commitUrl" class="list-group-item list-group-item-action flex-column align-items-start"
              *ngFor="let commitNode of pullRequest.commits.nodes" target="_blank">
            <div class="d-flex w-100 justify-content-between">
            <span class="mb-1">{{commitNode.commit.message}}</span>
              <small>@ {{commitNode.commit.committedDate | date:'yy-MM-dd'}}</small>
            </div>
          </a>
        </ul>
      </div>
    </section>
  `,
  styles: [`
    section {
      margin: 0 0 1rem 0;
    }
    small {
      margin-left: .5rem;
      line-height: 24px;
    }
  `]
})
export class PullRequestDetailsComponent {
  @Input() pullRequest: PullRequest;
}
