import React from "react";
import { Query } from "react-apollo";

// export const RepoConsumer = props => (
//   <Query query={repositoryOwnerQuery()}>
//     {results => props.render(results)}
//   </Query>
// );

const tech = [
  {
    id: 0,
    label: "React",
    logo: "",
    description: "Here's an example of me using react",
    href: ""
  },
  {
    id: 1,
    label: "C#",
    logo: "",
    description: "Wow, I sure know C#",
    href: ""
  },
  {
    id: 2,
    label: "SQL",
    logo: "",
    description: "Experience with SQL!",
    href: ""
  },
  {
    id: 3,

    label: "Baking!",
    logo: "",
    description:
      "I love pawning my sweet tooth off on others. It's like chemistry you can eat",
    href: null
  }
];

export const ExperienceConsumer = props =>
  props.render({
    loading: false,
    data: {
      tech,
      totalCount: tech.length
    },
    error: null
  });
