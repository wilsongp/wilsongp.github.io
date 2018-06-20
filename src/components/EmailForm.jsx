import React from 'react';

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

  /**
   * TODO: Hook up to gateway 'contact' route
   */
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

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
      <div className="row">
        <div className="col-12">
          <form onSubmit={this.onSubmit}>
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
          {this.state.submitted && (
            <p className="lead">
              Thanks for the email!<br />
              I'll get back to you as soon as I can.
            </p>
          )}
        </div>
      </div>
    );
  }
}
