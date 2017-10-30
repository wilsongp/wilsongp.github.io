import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import { Repo } from '../../home/models/repo';

const generateRepos = (max: number) => {
  const repos: Repo[] = [];
  for (let i = 0; i < max; i++) {
    repos.push({
      name: `Test Repo ${i}`
    });
  }

  return repos;
};

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
    return Observable.timer(1000).mapTo(generateRepos(10));
  }
}
