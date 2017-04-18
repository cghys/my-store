import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, Redirect, IndexRoute, Link, browserHistory } from 'react-router'
import App from './containers/App';

import HomeContainer from './containers/HomeContainer';
import HomeComp from './components/HomeComp';

import LoginComp from './components/LoginComp';
import LoginContainer from './containers/LoginCotainer';

import RegisterComp from './components/RegisterComp';
import RegisterContainer from './containers/RegisterContainer';

import CityplayComp from './components/CityplayComp';
import CityplayContainer from './containers/CityplayContainer'

import DestinationComp from './components/DestinationsComp'
import DestinationContainer from './containers/DestinationContainer'

import IslandTourComp from './components/IslandTourComp'
import IslandTourContainer from './containers/IslandTourContainer'

import PersonalComp from './components/PersonalComp'
import PersonalContainer from './containers/PersonalContainer'

import PrivateComp from './components/PrivateComp'
import PrivateContainer from './containers/PrivateContaner'

import CallComp from './components/CallComp'
import CallContainer from './containers/CallContainer'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Redirect from="/" to="main"/>
            <Route path="/" component={App}>
                <Route path="main" component={HomeContainer}>
                    <IndexRoute component={HomeComp}/>
                </Route>
                <Route path="login" component={LoginContainer}>
                    <IndexRoute component={LoginComp} />
                    </Route>
                <Route path="register" component={RegisterContainer}>
                    <IndexRoute component={RegisterComp}/>
                    </Route>
                <Route path="cityplay" component={CityplayContainer}>
                    <IndexRoute component={CityplayComp}/>
                    </Route>
                <Route path="destination" component={DestinationContainer} >
                    <IndexRoute component={DestinationComp}/>
                    </Route>
                <Route path="islandtour" component={IslandTourContainer}>
                    <IndexRoute component={IslandTourComp}/>
                </Route>
                <Route path="myinfo" component={PersonalContainer}>
                    <IndexRoute component={PersonalComp}/>
                </Route>

                <Route path="pravite" component={PrivateContainer}>
                    <IndexRoute component={PrivateComp}/>
                </Route>
                <Route path="Call" component={CallContainer}>
                    <IndexRoute component={CallComp}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('main')
)
