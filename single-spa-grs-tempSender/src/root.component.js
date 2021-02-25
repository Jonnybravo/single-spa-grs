import React, { useEffect } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Container } from "semantic-ui-react";

import { storeInstance } from "./redux/store";

import TemperatureInput from "./components/TemperatureInput";

export default class Root extends React.Component {
  state = {
    store: this.props.store,
    globalEventDistributor: this.props.globalEventDistributor,
  };

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    let ret = <div></div>;

    if (this.state.store && this.state.globalEventDistributor) {
      ret = (
        <Provider store={this.state.store}>
          <Router basename="/tempSender">
            <div fluid style={{padding: '30px', width: '100%'}}>
              <Switch>
                <Route path="/" exact>
                  <TemperatureInput
                    globalEventDistributor={this.state.globalEventDistributor}
                  />
                </Route>
              </Switch>
            </div>
          </Router>
        </Provider>
      );
    }

    return ret;
  }
}
