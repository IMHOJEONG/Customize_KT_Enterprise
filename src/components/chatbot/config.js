// // Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import { Header, BotAvatar, UserChatMessage }  from '.';
import React, { useEffect, useState } from 'react';

// const widgets = [
//   {
//     widgetName: 'overview',
//     widgetFunc: (props) => <Overview {...props} />,
//     mapStateToProps: ['gist'],
//   }
// ]

export const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt='a dog' />
    </div>
  );
};

// const widget = [
//   {
//     widgetName: 'overview',
//     widgetFunc: (props) => <Overview {...props} />,
//     mapStateToProps: ['gist'],
//   }
// ]

export const config = {
//   initialMessages: [createChatBotMessage(`Hello world`)]
  initialMessages: [
    createChatBotMessage(`고객님, 안녕하세요! 편리하고 안전한 Ktalk입니다!`, {
      withAvatar: false
    })
  ],
  widgets: [
    {
    
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    
    },
  ],
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

    header: (props) => <Header {...props}/>,
    botAvatar: () => <BotAvatar />,
    // botChatMessage: (props) => <BotChatMessage {...props} />,
    userChatMessage: (props) => <UserChatMessage {...props} />
  }
}