import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import './style_css/Compose.css';
// import add from '../assets/add.png'
// import pic from '../assets/pic.png'
// import smile from '../assets/smile.png'
import Message from './Message.js';

const MessageListFull = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: calc(100vh - 150px);
  webkit-scrollbar { width: 0 !important };
`;


function MessageList({ messages }) {

	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(scrollToBottom, [messages]);

	return (
		<MessageListFull>
			{messages.map((item) => (
				<Message key={item.id} {...item} />
			))}
			<div ref={messagesEndRef} />
		</MessageListFull>
		
	);
}

MessageList.propTypes = {
	messages: PropTypes.isRequired,
};

export default MessageList;
