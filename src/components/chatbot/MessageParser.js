import React from 'react';

export const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    if(message.includes('안녕')){
        actions.handle_HELLO_RESPONSE();
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