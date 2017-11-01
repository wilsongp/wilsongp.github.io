import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';

import { Repo } from '../../home/models/repo';
import { ApolloQueryResult } from 'apollo-client';

const RepositoresQuery = gql`
query {
  repositoryOwner(login: "wilsongp") {
    repositories(
      first: 5,
      orderBy: {field: PUSHED_AT, direction: DESC},
      privacy: PUBLIC
    ) {
      nodes {
        name
        description
        homepageUrl
        url,
        primaryLanguage {
          name,
          color
        }
      },
      totalCount,
      totalDiskUsage
    }
  }
}
`;

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
    //return Observable.of(fakeResponse());

    return this.apollo
      .watchQuery<RepositoriesResponse>({
        query: RepositoresQuery
      })
      .map(response => response.data.repositoryOwner);
  }
}

function fakeResponse() {
  return {
    repositories: {
      nodes: [{
        name: 'TEST NAME',
        description: 'DESCRIPTION',
        homepageUrl: 'www.test.com',
        url: 'www.url.com',
        primaryLanguage: {
          name: 'Javascript',
          color: '#ccc'
        }
      }]
    }
  };
}
