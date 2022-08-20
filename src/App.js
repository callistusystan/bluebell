import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LakePage from './pages/LakePage';
import MobileHackathon from './components/react-mobile-hackathon';
import { Route, Switch } from "react-router-dom";
import StampCollectionPage from "./pages/StampCollectionPage";

class App extends Component {
  render() {
      return (
          <MobileHackathon>
            <Switch>
              <Route path="/profile" component={ProfilePage} />
              <Route path="/lake" component={LakePage} />
              <Route path="/collection" component={StampCollectionPage} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </MobileHackathon>
      );
  }
}

export default App;
