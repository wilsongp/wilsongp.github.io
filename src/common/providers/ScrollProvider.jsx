import React from "react";

export const defaultContext = {
  x: 0,
  y: 0
};

const Context = React.createContext(defaultContext);
export const ScrollConsumer = Context.Consumer;
export class ScrollProvider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { ...defaultContext };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateScrollPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScrollPosition);
  }

  updateScrollPosition = () =>
    this.setState({ x: window.scrollX, y: window.scrollY });

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
