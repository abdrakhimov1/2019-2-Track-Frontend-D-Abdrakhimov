import React, {Component} from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from '@emotion/styled';
import Header from '../components/Header';
import CounterContainer from '../containers/CounterContainer';
import Chat from '../components/Chat';
import FriendList from '../components/FriendList';

export const history = createBrowserHistory();

export default class Routes extends Component {

	handleClick() {
		alert('OK')
	}

	render(){
	return (
		<Router history={history}>
			<div>
				{/* <nav>
					<ul>
						<li>
							<Link to="/Chat">Chat</Link>
						</li>
						<li>
							<Link to="/FriendList">FriendList</Link>
						</li>
					</ul>
				</nav> */}
				<Switch>
					<Route path='/Chat'>
						<Chat />
					</Route>
					<Route path='/FriendList'>
						<FriendList />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
}
