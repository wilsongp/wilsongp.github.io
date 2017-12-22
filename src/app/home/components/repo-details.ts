import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Chart } from 'angular-highcharts';

import { Repo } from '../models/repo';

@Component({
  selector: 'app-repo-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section fxLayout="column" fxLayoutAlign="center stretch" fxFill>
      <div fxLayout="row" fxLayoutAlign="center center"  fxLayoutAlign.gt-sm="space-around center" fxFill>
        <div class="detail-pane" fxLayout="column" fxLauyoutAlign="center center">
            <h4 class="card-title">{{repo.name}}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{{repo.description}}</h6>
            <nav class="nav">
              <a [href]="repo.url" class="nav-link active" target="_blank" >Github</a>
              <a [href]="repo.homepageUrl" *ngIf="repo.homepageUrl" class="nav-link active" target="_blank" >Demo</a>
            </nav>
        </div>
        <app-pr-details fxHide.sm fxHide.lt-sm *ngIf="repo.pullRequests.nodes.length > 0" [pullRequest]="repo.pullRequests.nodes[0]" >
        </app-pr-details>
      </div>
    </section>
  `,
  styles: [`
    section {
      margin: 0 0 0 0;
    }
    .detail-pane {
      max-width: 40%;
    }
  `]
})
export class RepoDetailsComponent implements OnInit {
  @Input() repo: Repo;

  chart: Chart;

  ngOnInit(): void {
    const chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3]
      }]
    });
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);
  }

}
