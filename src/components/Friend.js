import React from 'react';
import styled from '@emotion/styled';
import './style_css/Compose.css';
import ava from '../assets/avatar.png'

const FriendForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const FrienInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FriendName = styled.div`
    font-size: large;
    margin-right: 15px;
    font-weight: bold;
    margin-left: 5px;
    text-align: left;
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




export default function Friend({name, id, lastSeen, lastMessage}) {

      return (

        <div className="friend-unit">
                <img src={ava} className="ava" alt="ava"/>
          <FriendForm >
            <FrienInfo>
                <FriendName>{name}</FriendName>
                <FriendLastSeen>{lastSeen}</FriendLastSeen>
            </FrienInfo>
            <LastMessage>{lastMessage}</LastMessage>
          </FriendForm>
        </div>
      )
  }
