import * as React from 'react';
import { Provider } from 'react-redux';
import { Playground, store } from 'graphql-playground-react';

export class PlaygroundPage extends React.Component {
  render() {
    <Provider store={store}>
      <Playground endpoint="http://api.gwilson.info/" />
    </Provider>;

  }
}