import React from 'react';
import styled from '@emotion/styled';
import './style_css/Compose.css';
import locationImg from '../assets/maps-and-flags .png';
// import add from '../assets/add.png'
// import pic from '../assets/pic.png'
// import smile from '../assets/smile.png'

const MyMessageForm = styled.div`
    background: #e691c7;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-bottom: 10px;
    float: right;
    margin-left: 30px;
    margin-right: 10px;
    animation: fade-in 1s ease;
`;

const MessageForm = styled.div`
    background: #FBE4ED;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 10px;
    float: left;
    margin-right: 30px;
    margin-left: 10px;
    animation: fade-in .8s ease;
`;

const UserNameForm = styled.div`
    font-size: large;
    margin-right: 15px;
    font-weight: bold;
    margin-left: 5px;
    text-align: left;
`;
const MessageInfoForm = styled.div`
    display: flex;
    justify-content: space-between;
    
`;
const MessageText = styled.div`
    font-size: large;
    display: inline-block;
    text-align: left;
    margin-left: 5px;
    margin-right: 5px;
    word-break:break-all;
    float: left;
`;

const MessageTime = styled.div`
  font-weight: 200;
  font-size: small;
  margin-right: 5px;
`;

export default function Message({UserName, id, text, messageTime, geoType, imgType}) {
	if (UserName === 'Me'){
		if(geoType === true){
			return (
				<div>
					<MyMessageForm>
						<MessageInfoForm>
							<UserNameForm>{UserName}</UserNameForm>
							<MessageTime>{messageTime}</MessageTime>
						</MessageInfoForm>
						<MessageText>
							<div>
								<a href = {text} >Im here! Press to explore</a>
								<img src={locationImg} className="add" alt="add" />
							</div>
						</MessageText>
					</MyMessageForm>
				</div>
			);
		}
		if(imgType === true){
			return (
				<div>
					<MyMessageForm>
						<MessageInfoForm>
							<UserNameForm>{UserName}</UserNameForm>
							<MessageTime>{messageTime}</MessageTime>
						</MessageInfoForm>
						<MessageText>
							<div>
								<img src={text} className='img_in_message' alt="img in message"/>
							</div>
						</MessageText>
					</MyMessageForm>
				</div>
			);
		}
		return (
			<div>
				<MyMessageForm>
					<MessageInfoForm>
						<UserNameForm>{UserName}</UserNameForm>
						<MessageTime>{messageTime}</MessageTime>
					</MessageInfoForm>
					<MessageText>{text}</MessageText>
				</MyMessageForm>
			</div>
		);
        
	}
	if (UserName !== 'Me'){
		if(geoType === true){
			return (
				<div>
					<MessageForm>
						<MessageInfoForm>
							<UserNameForm>{UserName}</UserNameForm>
							<MessageTime>{messageTime}</MessageTime>
						</MessageInfoForm>
						<MessageText>
							<div>
								<a href = {text} >Im here! Press to explore</a>
								<img src={locationImg} className="add" alt="add" />
							</div>
						</MessageText>
					</MessageForm>
				</div>
			);
		}
		if(imgType === true){
			return (
				<div>
					<MessageForm>
						<MessageInfoForm>
							<UserNameForm>{UserName}</UserNameForm>
							<MessageTime>{messageTime}</MessageTime>
						</MessageInfoForm>
						<MessageText>
							<div>
								<img src={text} className='img_in_message' alt="img in message"/>
							</div>
						</MessageText>
					</MessageForm>
				</div>
			);
		}
		return (
			<div>
				<MessageForm>
					<MessageInfoForm>
						<UserNameForm>{UserName}</UserNameForm>
						<MessageTime>{messageTime}</MessageTime>
					</MessageInfoForm>
					<MessageText>{text}</MessageText>
				</MessageForm>
			</div>
		);
        
	}
}