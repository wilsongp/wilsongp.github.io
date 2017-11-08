import gql from 'graphql-tag';


const commitQuery = ({first}) => `
  commits(first: ${first}) {
    totalCount,
    nodes {
      commit {
        message,
        commitUrl
      }
    }
}
`;

const repositoryOwnerQuery = (login: string) => {
  return gql`
    query {
      repositoryOwner(login: "wilsongp") {
        repositories(first: 5, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
          nodes {
            id,
            name,
            description,
            homepageUrl,
            url,
            pullRequests(first:1, orderBy: {field: UPDATED_AT, direction: DESC}
            ) {
              totalCount,
              nodes {
                title,
                number,
                url,
                ${commitQuery({first: 100})}
              }
            }
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
};

export  {
  repositoryOwnerQuery,
  commitQuery
};
