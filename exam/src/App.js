import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import CityList from './CityList';
import Menu from './Menu';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
			<div>				
				<Switch>
					<Route path="/2">
						<div>secondpage</div>
					</Route>
					<Route path="/addCity">
						<Menu />
					</Route>
					<Route path="/">
						<CityList />
					</Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
