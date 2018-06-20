import React from "react";

export const defaultContext = {
  width: window.innerWidth || 0,
  height: window.innerHeight || 0
};

const Context = React.createContext(defaultContext);
export const ViewportConsumer = Context.Consumer;
export class ViewportProvider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { ...defaultContext };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateViewport);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewport);
  }

  updateViewport = () =>
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
