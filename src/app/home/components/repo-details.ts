import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Repo } from '../models/repo';

@Component({
  selector: 'app-repo-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section fxLayout="column" fxLayoutAlign="center stretch">
      <div class="card" >
        <div class="card-body">
          <h4 class="card-title">{{repo.name}}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{repo.description}}</h6>
          <p class="card-text">
            Stats about the repo
          </p>
          <a [href]="repo.url" target="_blank" class="card-link">Github</a>
          <a *ngIf="repo.homepageUrl" [href]="repo.homepageUrl" target="_blank" class="card-link">Demo</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      margin: 0 0 1rem 0;
    }
  `]
})
export class RepoDetailsComponent {
  @Input() repo: Repo;
}


/**
 {
  id,
  name,
  description,
  homepageUrl,
  url,
  primaryLanguage {
    name,
    color
  }
}
*/
