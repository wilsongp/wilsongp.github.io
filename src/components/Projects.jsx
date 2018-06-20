import React from "react";
import styled from "styled-components";

import { ExperienceConsumer } from "../graphql";
import { StyledSection } from "./Section";

export const StyledProjects = styled(StyledSection).attrs({
  className: "container-fluid"
})`
  height: 100%;
  .list-group-item {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.mediaBreak.sm}) {
    .list-group-item.active {
      position: relative;
      &:after,
      &:before {
        left: 100%;
        top: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }

      &:after {
        border-color: rgba(136, 183, 213, 0);
        border-left-color: #007bff;
        border-width: 31px;
        margin-top: -31px;
      }
    }
  }
`;

export class Projects extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedExp: null
    };
  }

  handleExpClick = exp => e => this.setState({ selectedExp: exp });

  render() {
    return (
      <StyledProjects>
        <ExperienceConsumer
          render={({ loading, error, data: { tech } }) => {
            if (error) {
              return (
                <h1>
                  Oops... Something went wrong: <small>{error.message}</small>
                </h1>
              );
            }

            if (loading) {
              return <h1>Loading...</h1>;
            }

            return (
              <div className="row">
                <div className="col-md">
                  <ul id="repo-list" role="tablist" aria-orientation="vertical">
                    {tech.map(exp => (
                      <TechListItem
                        key={exp.id}
                        exp={exp}
                        active={
                          this.state.selectedExp &&
                          this.state.selectedExp.id == exp.id
                        }
                        onClick={this.handleExpClick(exp)}
                      />
                    ))}
                  </ul>
                </div>
                <div className="col-md">
                  {this.state.selectedExp && (
                    <ExpDetails exp={this.state.selectedExp} />
                  )}
                </div>
              </div>
            );
          }}
        />
      </StyledProjects>
    );
  }
}

export const TechListItem = ({ exp, active, onClick }) => (
  <li
    className={`list-group-item list-group-item-action arrow-box ${
      active ? "active" : ""
    }`}
    onClick={onClick}
  >
    {exp.label}
  </li>
);

export const ExpDetails = ({ exp }) => (
  <div className="card text-center h-100">
    <div className="card-body">
      <h4 className="card-title text-uppercase">{exp.label}</h4>
      <h6 className="card-subtitle mb-2 text-muted">{exp.description}</h6>
      {exp.href && (
        <a href={exp.href} className="card-link" target="_blank">
          Learn More
        </a>
      )}
    </div>
  </div>
);

export default Projects;
