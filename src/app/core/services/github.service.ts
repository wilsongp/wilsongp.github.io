import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';

import * as queries from './github.queries';
import { Repo } from '../../home/models/repo';

import * as MockData from './data/github.mocks';

interface RepositoriesResponse {
  repositoryOwner: RepositorySearchResponse;
}

interface RepositorySearchResponse {
  repositories: {
    nodes: Repo[]
  };
}

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

  constructor(private apollo: Apollo) {}

  searchRepos(search: RepositorySearchFields): Observable<RepositorySearchResponse> {
    const baseQuery = queries.repositoryOwnerQuery('wilsongp');

    return Observable.of(MockData.repositoryOwnerResponse.data.repositoryOwner);

    // return this.apollo
    //   .watchQuery<RepositoriesResponse>({
    //     query: baseQuery
    //   })
    //   .map(response => response.data.repositoryOwner);
  }
}

