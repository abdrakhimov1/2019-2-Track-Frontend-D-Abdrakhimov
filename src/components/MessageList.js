import React from 'react';
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
`;

function MessageList({ messages }) {
	return (
		<MessageListFull>
			{messages.map((item) => (
				<Message key={item.id} {...item} />
			))}
		</MessageListFull>
	);
}

MessageList.propTypes = {
	messages: PropTypes.isRequired,
};

export default MessageList;
