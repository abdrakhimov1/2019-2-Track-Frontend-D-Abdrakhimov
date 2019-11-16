import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import back from '../assets/back.png';
import info from '../assets/info.png';
import search from '../assets/search.png';
import ava from '../assets/avatar.png';

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const TopBar = styled.div`
  background-color: #550445;
  display: inline-block;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 20px;
  color: #fff;
  display: flex;
  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`;

const UserNameForm = styled.div`
  font-size: large;
  margin-right: 15px;
  font-weight: bold;
  margin-left: 5px;
  text-align: left;
`;
const LastSeenForm = styled.div`
  font-weight: 200;
  font-size: small;
  margin-right: 5px;
  text-align: left;
  margin-left: 5px;
`;
const UserDisplayForm = styled.div`
  display: flex;
  flex-direction: column;
`;

function Header({ UserName, lastSeen }) {
	return (
		<TopBar>
			<Link to="/FriendList">
				<img src={back} className="add" alt="add" />
			</Link>
			<img src={ava} className="ava" alt="ava" />
			<UserDisplayForm>
				<UserNameForm>UserName</UserNameForm>
				<LastSeenForm>last:seen</LastSeenForm>
			</UserDisplayForm>
			<img src={info} className="add" alt="add" />
			<img src={search} className="add" alt="add" />
		</TopBar>
	);
}

Header.propTypes = {
	UserName: PropTypes.string.isRequired,
	lastSeen: PropTypes.string.isRequired,
};

export default Header;
