// // Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
  
export const config = {
//   initialMessages: [createChatBotMessage(`Hello world`)]
  initialMessages: [createChatBotMessage(`안녕하세요. Enterprise KT 입니다!`)],
  botName: '마비서',
  customeStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  }
}