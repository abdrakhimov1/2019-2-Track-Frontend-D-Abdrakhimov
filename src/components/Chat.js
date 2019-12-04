import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import MessageList from './MessageList';
import './style_css/Compose.css';
import Header from './Header';
import add from '../assets/document.png';
import pic from '../assets/photo.png';
import heart from '../assets/heart.png';
import locationImg from '../assets/maps-and-flags .png';
import microphoneImg from '../assets/microphone.png';


const ComposeForm = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 55px;
  background: #8b3d78;
`;

// const DropBackground = styled.div`
// width: 80%;
// height: 80%;
// margin: 10%;
// border-style: dashed 5px;
// position: absolute;
// colour: black;
// z-index: 10;
// visability: hidden;
// `;

export default function Chat() {

	useEffect(() => {
		const onFile = event => {
			event.stopPropagation();
			event.preventDefault();
		};

		const sendFile = event => {
			event.stopPropagation();
			event.preventDefault();
			
			const file = event.dataTransfer.files[0];
			if (file.type.indexOf('image') === 0 && file.size < 300000) {
				const reader = new FileReader();
				reader.onload = function(event2) {
					const imgToMessage = event2.target.result;
					setMessages([
						...messages,
						{
							id: Date.now(),
							UserName: 'Me',
							messageTime: 'date and time',
							wasRead: 'true',
							text:  
								<img src={imgToMessage} className='img_in_message' alt="img in message"/>,
						},
					]);
						
					const data = new FormData();
					data.append('file', imgToMessage);
					data.append('user', 'Danny');

					fetch('https://tt-front.now.sh/upload', {
						method: 'POST',
						body: data,
					});
					
				};
				reader.readAsDataURL(file);
			} else {
				alert('Неправильный формат файла');
			}
			

			
		};

		// async function getMedia() {

		// let stream = null;
		// try{
		// const constrains = { audio: true, video : true};
		// stream = await navigator.mediaDevices.getUserMedia(constrains);
		// }catch(err) {

		// }
		// }

		// const mediaRecorder = new mediaRecorder(stream);

		// mediaRecorder.start();
		// mediaRecorder.stop();

		// const chunks = [];

		// mediaRecorder.addEventListener('stop', (event) => {
		// const audio = document.createElement('audio');
		// const blob = new Blob(chunks, {type: mediaRecorder.mimeType});
		// chunks = [];
		// const audioURL = URL.createObjectURL(blob);
		// audio.src = audioURL;
		// });

		// mediaRecorder.addEventListener('dataavailable', (event) => {
		// chunks.push(event.data);
		// });
	
		document.addEventListener('dragenter', onFile, false);
		document.addEventListener('dragleave', onFile, false);
		document.addEventListener('dragover', onFile, false);
		document.addEventListener('drop', sendFile, false);
	
		return () => {
			document.removeEventListener('dragenter', onFile);
			document.removeEventListener('dragleave', onFile);
			document.removeEventListener('dragover', onFile);
			document.removeEventListener('drop', sendFile);
		};
	});

	const [messageText, setMessageText] = useState('');
	const { chatId } = useParams();
	const instantChatId = chatId;
	let messageList = [];

	if(localStorage.getItem(`chat${instantChatId}`)) {
		messageList = JSON.parse(localStorage.getItem(`chat${instantChatId}`));
	}

	const [messages, setMessages] = useState(
		messageList,
	);

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
						chatId: instantChatId,
					},
				]);

				setMessageText('');
			};
			

		}

	};

	const makeGeolocationMessage = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			const linkText = `https://www.openstreetmap.org/#map=18/${  position.coords.latitude  }/${  position.coords.longitude}`;
			setMessages([
				...messages,
				{
					id: Date.now(),
					UserName: 'Me',
					messageTime: 'date and time',
					wasRead: 'true',
					text:  
						<div>
							<a href = {linkText} >Im here! Press to explore</a>
							<img src={locationImg} className="add" alt="add" />
						</div>,
				},
			]);
		});
	};




	// const dropbox = document.getElementById('dropbox');

	// const preventAndStop = (event) => {
	// event.stopPropagation();
	// event.preventDefault();
	// };

	// const drop = (event) => {
	// preventAndStop(event);
	// const files = event.dataTransfer.files;
	// handleFiles(files);
	// };

	// dropbox.addEventListener('dragenter', preventAndStop, false);
	// dropbox.addEventListener('dragover', preventAndStop, false);
	// dropbox.addEventListener('drop', drop, false);

	// localStorage.setItem(`chat${instantChatId}`, JSON.stringify(messages));
	return (
	
			
		
		<div>
			
			<div  className="container">
				<Header UserName={`User ${instantChatId}`}/>
				
				<div>
					
					<MessageList messages={messages} />
					
				</div>
				
			</div>
			
			<ComposeForm>
				<img src={add} className="add" alt="add" />
				<img src={microphoneImg} className="add" alt="microphone" />
				<input
					type="text"
					id="main-input"
					className="compose-input"
					placeholder="Введите сообщение"
					autoComplete="off"
					value={messageText}
					onChange={(event) => setMessageText(event.target.value)}
					onKeyPress={addMessage}
					onMouseEnter={addMessage}
				/>
				<img src={pic} className="add" alt="add" />
				<img src={heart} className="add" alt="add" />
				<button className = "button_style" type="button" onClick={makeGeolocationMessage}><img src={locationImg} className="add" alt="add" /></button>
			</ComposeForm>
			
		</div>

	);
}
