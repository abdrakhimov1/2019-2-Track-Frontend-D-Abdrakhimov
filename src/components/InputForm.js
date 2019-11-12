// import React, {useState} from 'react'
// import styled from '@emotion/styled'
// import './style_css/Compose.css'
// // import add from '../assets/add.png'
// // import pic from '../assets/pic.png'
// // import smile from '../assets/smile.png'
// import Message from './Message.js'
// import MessageList from './MessageList.js'

// function Compose(props) {

//     const [messageText, setMessageText] = useState('')

//     const addMessage = event => {
//         if (event.key === 'Enter'){
//             setMessageText([
//                 ...messages,
//                 {
//                     id: Date.now(),
//                     UserName : 'userName',
//                     wasSent: "date and time",
//                     wasRead: "true",
//                     text: messageText
//                 }
//             ])
//         }
//     }

//     return (
//         <div className="compose">
//             {/* <img src={add} className="add" alt="add"/> */}
//             <input
//                 type="text"
//                 id = 'main-input'
//                 className="compose-input"
//                 placeholder="Введите сообщение"
//                 value = {messageText}
//                 onChange={event => setMessageText(event.target.value)}
//                 onKeyPress={addMessage}
//             />
            
//             {/* <img src={pic} className="add" alt="add"/> */}
//             {/* <img src={smile} className="add" alt="add"/> */}
            
//         </div>
//     )
//   }
  
//   export default Compose
  