import React, {useState} from 'react'
import styled from '@emotion/styled'
import Friend from '../components/Friend'
import menu from '../assets/menu.png';
import search from '../assets/search.png';
import info from '../assets/info.png';

const FriendListFull = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const FriendListHeader =styled.div`
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
`

export default function FriendList () {

  const [users, setUsers] = useState([
    {id: 1, name: "user1", lastSeen: "date and time", lastMessage: 'Hi, Im user 1'},
    {id: 1, name: "user2", lastSeen: "date and time", lastMessage: 'Hi, Im user 2'},
    {id: 1, name: "user3", lastSeen: "date and time", lastMessage: 'Hi, Im user 3'}
  ])

  return (
    <FriendListFull>
      <FriendListHeader>
      <img src={menu} className="add" alt="add"/>
      <TitleText>Messanger</TitleText>
      <img src={search} className="add" alt="add"/>
      <img src={info} className="add" alt="add"/>
      </FriendListHeader>
        {users.map(item => <Friend key = {item.id} {...item} />)}
    </FriendListFull>
)
}