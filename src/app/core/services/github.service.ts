import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import { Repo } from '../../home/models/repo';

const repos: Repo[] = [
  { name: '**Some Random Repository name**' }
];

export interface RepositoryOrderByField {
  field: string;
  direction: string;
}

export interface RepositorySearchFields {
  first: number;
  orderBy: RepositoryOrderByField;
}

@Injectable()
export class GithubService {

  searchRepos(search: RepositorySearchFields) {
    return Observable.timer(1000).mapTo(repos);
  }
}
