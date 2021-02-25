import React from "react";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Switch, Route, NavLink, } from "react-router-dom";
import { Container } from "semantic-ui-react";

import {storeInstance} from "./redux/store";

import TemperatureRegister from "./components/TemperatureRegister";

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
          ret =
          <Provider store={this.state.store}>
          <Router> 
            <Container fluid style={{padding: '30px'}}>
               <Switch>
                <Route path="/" exact>
                  <TemperatureRegister {...this.props} globalEventDistributor={this.state.globalEventDistributor}/>
                </Route>
              </Switch> 
            </Container>
          </Router>
        </Provider>
      }

      return ret;
  }
}
