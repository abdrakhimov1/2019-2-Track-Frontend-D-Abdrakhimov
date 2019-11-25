import React, { useState, useParams } from 'react';
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
	let { chat_id } = useParams();
	const instantChatId = 1;//props.match.params.chat_id;
	var messageList = [];

	if(localStorage.getItem('chat' + instantChatId)) {
		messageList = JSON.parse(localStorage.getItem('chat' + instantChatId));
	};

	const [messages, setMessages] = useState(
		messageList,
	);

	function getMessages(){

		// if (localStorage.getItem('chat'+ instantChatId) !== null){
		// 	// for (let i = 0; i < localStorage.getItem('chat' + instantChatId).length; i++) {
		// 	// 	alert(i);
		// 	// }
		// 	setMessages(
		// 		localStorage.getItem('chat' + instantChatId),
		// 	);
		// };
	};

	const chat_tmp = localStorage.getItem('chat' + instantChatId);

	
	// useEffect(() => {
	// 	setMessages(
	// 		localStorage.getItem('chat' + instantChatId),
	// 	);
	// });


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
						chatId: 2,
					},
				]);
				localStorage.setItem('chat' + instantChatId, JSON.stringify(messages));
				setMessageText('');
			}
			
			
		}
		
	};

	return (
		<div>
			<div className="container">
				<Header UserName={"User " + instantChatId}/>
				
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
