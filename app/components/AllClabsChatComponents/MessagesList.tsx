'use client';

// MessagesList.js
import React from 'react';

import Messages from './CLABSMessages';
import Message from './CLABSMessage';
import TextElement from './CLABSTextElement';
import CodeElement from './CLABSCodeElement';
import LoadingElement from './CLABSLoadingElement';
import ErrorElement from './CLABSErrorElement';

function MessagesList({ messages }: any) {
  const renderElement = (element: any) => {
    switch (element.type) {
      case 'text':
        return (
          <TextElement slot="message-item-content" content={element.content} />
        );
      case 'highlight-text':
        return (
          <TextElement
            enable-text-highlighting
            slot="message-item-content"
            content={element.content}
          />
        );
      case 'code':
        return (
          <CodeElement slot="message-item-content" content={element.content} />
        );
      case 'loading':
        return (
          <LoadingElement
            slot="message-item-content"
            content={element.content}
          />
        );
      case 'error':
        return (
          <ErrorElement slot="message-item-content" content={element.content} />
        );
      default:
        return (
          <TextElement slot="message-item-content" content={element.content} />
        );
    }
  };

  return (
    <Messages slot="messages" user-name="user" agent-name="bot">
      {messages?.map((message: any, index: any) => (
        <Message
          disableButtons={true}
          slot="message-items"
          display-name={message.origin === 'user' ? 'You' : 'Assistant'}
          key={'message-' + `${message.time}${index}${message?.content || ''}`}
          user-submitted={message.userSubmitted}
          origin={message.origin}
          time-stamp={message.time}
          disableIcon={false}
          index={message.index}
        >
          {message.elements.map((element: any, subIndex: any) => (
            <React.Fragment key={subIndex}>
              {renderElement(element)}
            </React.Fragment>
          ))}
        </Message>
      ))}
    </Messages>
  );
}

export default MessagesList;
