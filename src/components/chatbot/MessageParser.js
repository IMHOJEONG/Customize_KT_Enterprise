import React from 'react';
import ResponseData from './data.json';

const actionsResult = {};
ResponseData.forEach((data)=>{
  actionsResult[data.Q] = data.Q;
});

export const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);

    if(message === actionsResult[message]) {
      actions[message]();
    }

    if(message.includes('dog')) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};