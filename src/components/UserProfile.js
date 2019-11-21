import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import back from '../assets/back.png';
import okIcon from '../assets/ok-mark.png';
import ava from '../assets/avatar.png';
import camera from '../assets/photo-camera.png';

const UserProfileHeader = styled.div`
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

const PhotoChangeDiv = styled.div`
    display: flex;
    align-items: center;
    align-content: center; 
    justify-content: center;
    margin: 30px;
`;
const UserProfileMain = styled.div`
    display: flex;
    flex-direction: column;
`;
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    align-content: center; 
    justify-content: center;
    flex-direction: column;
`;

const FullNameBlock = styled.div`
    background-color: #F1EFE9;
    width: 80%;
    height: 70px;
    display: flex;
    flex-direction: column;
    border-radius: 5px 5px 0 0;
    border-bottom: #AAA8A1 solid;
    margin-top: 30px;
`;
const TextBoxName = styled.div`
    font-size: small;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-top: 10px;
    opacity: 0.5;
`;
const TextHelp = styled.div`
    font-size: small;
    margin-bottom: 5px;
    margin-left: 10px;
    opacity: 0.5;
    width: 80%;
`;

const BioBlock = styled.div`
    background-color: #F1EFE9;
    width: 80%;
    height: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 5px 5px 0 0;
    border-bottom: #AAA8A1 solid;
    margin-top: 30px;
`;

export default function UserProfile() {
	return (
		<UserProfileMain>
			<UserProfileHeader>
				<Link to="/FriendList">
					<img src={back} className="add" alt="add" />
				</Link>
				<TitleText>Edit Profile</TitleText>
				<Link to="/FriendList">
					<img src={okIcon} className="add" alt="add" />
				</Link>
			</UserProfileHeader>
			<UserInfo>
				<PhotoChangeDiv>
					<img src={ava} className="avaToChange" alt="avaToChange" />
					<img src={camera} className="photoPicCover" alt='photoPicCover' />
				</PhotoChangeDiv>
				<FullNameBlock>
					<TextBoxName>Full Name</TextBoxName>
					<input className="textbox" placeholder="Full User Name" />
				</FullNameBlock>
				<FullNameBlock>
					<TextBoxName>Nick Name</TextBoxName>
					<input className="textbox" placeholder="@userNickName" />
				</FullNameBlock>
				<TextHelp>Minimum length is 5 characters</TextHelp>
				<BioBlock>
					<TextBoxName>Bio</TextBoxName>
					<textarea className="textareabox" placeholder="Information about user or some phrases to show that you cool" />
				</BioBlock>
				<TextHelp>Any information about you.</TextHelp>
			</UserInfo>
		</UserProfileMain>
	);
};