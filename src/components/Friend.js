import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import './style_css/Compose.css';
import ava from '../assets/avatar.png';

const FriendForm = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 10px;
    text-decoration: none;
`;

const FrienInfo = styled.div`
    display: flex;
    justify-content: space-between;
    text-decoration: none;
`;

const FriendName = styled.div`
    text-decoration: none;
    font-size: large;
    margin-right: 15px;
    font-weight: bold;
    margin-left: 5px;
    text-align: left;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const FriendLastSeen = styled.div`
  font-weight: 200;
  font-size: small;
  margin-right: 5px;
`;

const LastMessage = styled.div`
    font-size: medium;
    display: inline-block;
    text-align: left;
    margin-left: 5px;
    margin-right: 5px;
    word-break:break-all;
    float: left;
`;



function Friend({name, chatId, lastSeen, lastMessage}) {

	

	return (
		<Link to={`/Chat/${  chatId}`} style={{ textDecoration: 'none', color: 'black' }}>
			<div className="friend-unit" >

				<img src={ava} className="ava" alt="ava"/>
				<FriendForm >
					<FrienInfo>
						<FriendName>{name}</FriendName>
						<FriendLastSeen>{lastSeen}</FriendLastSeen>
					</FrienInfo>
					<LastMessage>{lastMessage}</LastMessage>
				</FriendForm>
			</div>
		</Link>

	);
}

Friend.propTypes = {
	name: PropTypes.string.isRequired,
	lastSeen: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
	chatId: PropTypes.number.isRequired,
};

export default Friend;