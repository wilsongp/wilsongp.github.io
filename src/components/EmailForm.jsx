import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SEND_EMAIL = gql`
  mutation sendEmail($name: String!, $email: String!) {
    sendEmail(name: $name, email: $email) {
      success
    }
  }
`;

export class EmailForm extends React.PureComponent {
  static EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  constructor(props, context) {
    super(props, context);

    this.state = {
      submitted: false,
      email: '',
      name: ''
    };
  }

  onInputChange = (e) => {
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });
  };

  validate = () =>
    EmailForm.EMAIL_REGEX.test(this.state.email) && this.state.name;

  render() {
    return (
      <Mutation mutation={SEND_EMAIL}>
        {(sendEmail, { data, called }) => (
          <div className="row">
            <div className="col-12">
              <form onSubmit={e => {
                e.preventDefault();
                sendEmail({
                  variables: {
                    email: this.state.email,
                    name: this.state.name
                  }
                });
                this.setState({ submitted: true, email: '', name: '' });
              }}>
                <div className="form-row">
                  <div className="col-md-5 p-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onInputChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-5 p-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onInputChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-md-2 p-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!this.validate()}
                    >
                      Submit
                </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 p-3">
              {called && data && <SubmittedMessage data={data.sendEmail} />}
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export const SubmittedMessage = ({ data }) => (
  <div className="alert">
    {data && data.success ?
      <p>
        Thanks for the email!<br />
        I'll get back to you as soon as I can.
      </p> :
      <p>
        Oops... looks like something went wrong.
        Please try again later or &nbsp;
        <a href="https://github.com/wilsongp/wilsongp.github.io/issues/new">submit an issue</a>
      </p>
    }
  </div>
);