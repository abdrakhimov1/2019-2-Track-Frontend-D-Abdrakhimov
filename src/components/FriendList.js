import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Friend from './Friend';
import menu from '../assets/menu.png';
import search from '../assets/search.png';
import newChatIcon from '../assets/newChat.png';
import UserIcon from '../assets/user.png';

const FriendListFull = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  scroll: auto;
`;

const FriendListHeader = styled.div`
  background-color: #550445;
  display: inline-block;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 20px;
  color: #fff;
  display: flex;
  font-size: large;
`;

const TitleText = styled.div`
  font-size: large;
`;

export default function FriendList() {
	const [users, setUsers] = useState([
		{ id: 1, name: 'user1', lastSeen: 'date and time', lastMessage: 'Hi, Im user 1', chat_id: 1 },
		{ id: 2, name: 'user2', lastSeen: 'date and time', lastMessage: 'Hi, Im user 2', chat_id: 2 },
		{ id: 3, name: 'user3', lastSeen: 'date and time', lastMessage: 'Hi, Im user 3', chat_id: 3 },
	]);

	const addChat = (event) => {
		setUsers([
			...users,
			{
				id: Date.now(),
				name: 'user' + (users.length + 1),
				lastSeen: 'date and time',
				lastMessage: 'Hi, Im new user',
				chat_id: users.length + 1,
			},
		]);
	};

	return (
		<FriendListFull>
			<FriendListHeader>
				<img src={menu} className="add" alt="add" />
				<Link to="/UserProfile">
					<img src={UserIcon} className="add" alt="add" />
				</Link>
				<TitleText>Messanger</TitleText>
				<img src={search} className="add" alt="add" />
				<Link onClick={addChat}>
					<img src={newChatIcon} className="add" alt="add" />
				</Link>
			</FriendListHeader>
			{users.map((item) => (
				<Friend key={item.id} {...item} />
			))}
		</FriendListFull>
	);
}
