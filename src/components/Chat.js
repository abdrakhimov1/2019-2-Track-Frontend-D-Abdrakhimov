import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import MessageList from './MessageList';
import './style_css/Compose.css';
import Header from './Header';
import add from '../assets/document.png';
import pic from '../assets/photo.png';
import heart from '../assets/heart.png';
import locationImg from '../assets/maps-and-flags.png';

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
	const { chatId } = useParams();
	const instantChatId = chatId;
	let messageList = [];

	if(localStorage.getItem(`chat${instantChatId}`)) {
		messageList = JSON.parse(localStorage.getItem(`chat${instantChatId}`));
	}

	const [messages, setMessages] = useState(
		messageList,
	);

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
						chatId: instantChatId,
					},
				]);

				setMessageText('');
			};
			

		}


	const makeGeolocationMessage = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			const linkText = `https://www.openstreetmap.org/#map=18/${  position.coords.latitude  }/${  position.coords.longitude}`;
			setMessages([
				...messages,
				{
					id: Date.now(),
					UserName: 'Me',
					messageTime: 'date and time',
					wasRead: 'true',
					text:  
						<a>
							<a href = {linkText} >Im here! Press to explore</a>
							<img src={locationImg} className="add" alt="add" />
						</a>,
				},
			]);
		});
	};

	return (
		<div>
			<div className="container">
				<Header UserName={`User ${instantChatId}`}/>
				
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
					onMouseEnter={addMessage}
				/>
				<img src={pic} className="add" alt="add" />
				<img src={heart} className="add" alt="add" />
				<button className = "button_style" type="button" onClick={makeGeolocationMessage}><img src={locationImg} className="add" alt="add" /></button>
			</ComposeForm>
		</div>
	);
}
