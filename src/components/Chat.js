import React, { useState } from 'react';
import styled from '@emotion/styled';
import MessageList from './MessageList';
import './style_css/Compose.css';
import Header from './Header';
import add from '../assets/document.png';
import pic from '../assets/photo.png';
import heart from '../assets/heart.png';

const ComposeForm = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 55px;
  background: #8b3d78;
`;

export default function Chat() {
	const [messageText, setMessageText] = useState('');

	const [messages, setMessages] = useState([
		{ id: 1, text: 'Message Text1', UserName: 'User name', messageTime: 'date and time', wasRead: 'true' },
		{ id: 2, text: 'Message Text2', UserName: 'User name', messageTime: 'date and time', wasRead: 'true' },
		{ id: 3, text: 'Message Text3', UserName: 'User name', messageTime: 'date and time', wasRead: 'true' },
	]);

	const addMessage = (event) => {
		if (event.key === 'Enter') {
			if (messageText !== '') {
				setMessages([
					...messages,
					{
						id: Date.now(),
						UserName: 'Me',
						messageTime: 'date and time',
						wasRead: 'true',
						text: messageText,
					},
				]);
				setMessageText('');
			}
		}
	};

	return (
		<div>
			<div className="container">
				<Header />
				<MessageList messages={messages} />
			</div>

			<ComposeForm>
				<img src={add} className="add" alt="add" />
				<input
					type="text"
					id="main-input"
					className="compose-input"
					placeholder="Введите сообщение"
					autoComplete="off"
					value={messageText}
					onChange={(event) => setMessageText(event.target.value)}
					onKeyPress={addMessage}
				/>
				<img src={pic} className="add" alt="add" />
				<img src={heart} className="add" alt="add" />
			</ComposeForm>
		</div>
	);
}
