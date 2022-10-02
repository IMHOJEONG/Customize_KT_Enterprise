import React from 'react';

const HELLO_RESPONSE_MESSAGE = `안녕하세요.`
export const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handle_HELLO_RESPONSE = () => {

        const botMessage = createChatBotMessage(HELLO_RESPONSE_MESSAGE);

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));

    };

    return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handle_HELLO_RESPONSE
          },
        });
      })}
    </div>
  );
};
