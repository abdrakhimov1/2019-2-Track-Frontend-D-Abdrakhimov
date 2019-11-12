import React, {useState} from 'react';
import {withRouter} from 'react-router';
import Compose from './InputForm';
import MessageList from './MessageList';
import './style_css/Compose.css';
import Header from './Header';
import styled from '@emotion/styled'
import add from '../assets/document.png'


const ComposeForm = styled.div`
    display: flex;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height:60px;
    background: #8b3d78;
`

export default function Chat(){
    // state = {
    //     users : [
    //         {id: 1, name: "user1", lastSeen: "date and time"},
    //         {id: 2, name: "user2", lastSeen: "date and time"},
    //         {id: 3, name: "user3", lastSeen: "date and time"},
    //         {id: 4, name: "user4", lastSeen: "date and time"}
    //     ],

    //     messages : [
    //         {id: 1,  text: "Message Text1", UserName: "User name", wasSent: "date and time", wasRead: "true"},
    //         {id: 2, text: "Message Text2", UserName: "User name", wasSent: "date and time", wasRead: "true"},
    //         {id: 3, text: "Message Text3", UserName: "User name", wasSent: "date and time", wasRead: "true"}
    //     ]
    // }

    
    const [messageText, setMessageText] = useState('')


    const [users, setUsers] = useState([
        {id: 1, name: "user1", lastSeen: "date and time"},
        {id: 2, name: "user2", lastSeen: "date and time"},
        {id: 3, name: "user3", lastSeen: "date and time"},
        {id: 4, name: "user4", lastSeen: "date and time"}
        ])

    const [messages, setMessages] = useState([
        {id: 1,  text: "Message Text1", UserName: "User name", wasSent: "date and time", wasRead: "true"},
        {id: 2, text: "Message Text2", UserName: "User name", wasSent: "date and time", wasRead: "true"},
        {id: 3, text: "Message Text3", UserName: "User name", wasSent: "date and time", wasRead: "true"}  
    ])

    const addMessage = event => {
        if (event.key === 'Enter'){
            if (messageText !== ''){
                setMessages([
                    ...messages,
                    {
                        id: Date.now(),
                        UserName : 'Me',
                        wasSent: "date and time",
                        wasRead: "true",
                        text: messageText
                    }
                ])
                setMessageText('')
        }
    }
    }


    return (
        <div>
        <div className='container'>
            <Header />
            <MessageList messages={messages} />
        </div>

        <ComposeForm>
            <img src={add} className="add" alt="add"/>
            <input
                type="text"
                id = 'main-input'
                className="compose-input"
                placeholder="Введите сообщение"
                autocomplete="off"
                value = {messageText}
                onChange={event => setMessageText(event.target.value)}
                onKeyPress={addMessage}
            />
   
        </ComposeForm>
        </div>
        )
    
    }