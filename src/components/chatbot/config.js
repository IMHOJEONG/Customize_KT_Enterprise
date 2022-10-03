// // Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import { Header, BotAvatar }  from '.';
import React from 'react';
export const config = {
//   initialMessages: [createChatBotMessage(`Hello world`)]
  initialMessages: [createChatBotMessage(`안녕하세요. Enterprise KT 입니다!`)],
  botName: 'chatbot',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  customComponents: {

    header: (props) => <Header />,
    botAvatar: () => <BotAvatar />

  }
}