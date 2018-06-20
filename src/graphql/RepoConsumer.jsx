import React from "react";
import { Query } from "react-apollo";
import { repositoryOwnerQuery } from "./queries";

import { repositoryOwnerResponse } from "./data/github.mocks";

// export const RepoConsumer = props => (
//   <Query query={repositoryOwnerQuery()}>
//     {results => props.render(results)}
//   </Query>
// );

export const RepoConsumer = props =>
  props.render({
    loading: false,
    data: repositoryOwnerResponse.data,
    error: null
  });
