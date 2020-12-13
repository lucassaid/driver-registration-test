import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Home from './screens/Home'
import UserData from './screens/UserData'
import CarData from './screens/CarData'
import Final from './screens/Final'
import { routes }  from './lib/consts'

import "./App.css";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Route
          render={({ location }) => {
            
            window.scrollTo({top: 0, behavior: 'smooth'})

            return (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route exact path={routes.HOME} component={Home}/>
                  <Route exact path={routes.USER_DATA} component={UserData} />
                  <Route exact path={routes.CAR_DATA} component={CarData} />
                  <Route exact path={routes.FINAL} component={Final} />
                </Switch>
              </AnimatePresence>
            )
          }}
        />
      </Router>
    </div>
  </Provider>
);

export default App;
