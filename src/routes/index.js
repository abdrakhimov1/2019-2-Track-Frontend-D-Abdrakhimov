import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Chat from '../components/Chat';
import FriendList from '../components/FriendList';

export const history = createBrowserHistory();

export default function Routes() {

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

