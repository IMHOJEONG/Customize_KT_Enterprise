import React from 'react';
import ResponseData from './data.json';

const HELLO_RESPONSE_MESSAGE = `안녕하세요.`;

const BYE_RESPONSE_MESSAGE = `안녕히 가세요.`;

function makeFunction (createChatBotMessage, setState, message) {

  function botFunction(){

    const botMessage = createChatBotMessage(message);
  
    setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
    }));
  
  }

  return botFunction;

}

export const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const name = makeFunction(createChatBotMessage, setState, HELLO_RESPONSE_MESSAGE);
    const actionsResult = {'name': name};
    ResponseData.forEach((data)=>{
      actionsResult[data.Q] = makeFunction(createChatBotMessage, setState, data.A)
    });
    
    return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: actionsResult,
        });
      })}
    </div>
  );
};
