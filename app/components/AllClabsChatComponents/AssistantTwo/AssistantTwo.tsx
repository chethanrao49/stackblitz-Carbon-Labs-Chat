'use client';

import React, { useState } from 'react';

import CLABSChatComp from '../CLABSChat';
import CLABSMessagesList from '../MessagesList';

function AssistantTwo() {
  const initialMessage = [
    {
      origin: 'bot',
      hasError: false,
      time: new Date().toLocaleTimeString(),
      index: 0,
      elements: [
        {
          type: 'text',
          content: 'Welcome Message',
        },
      ],
    },
  ];

  const [messages, setMessages] = useState(initialMessage);

  const handleOnSubmit = async (event: any) => {
    const userTextInput = `${event?.detail?.message?.text}`;

    const userMessage = {
      origin: 'user',
      time: new Date().toLocaleTimeString(),
      index: 0,
      userSubmitted: true,
      elements: [
        {
          type: 'text',
          content: userTextInput,
        },
      ],
    };

    const loadingBotMessage = {
      origin: 'bot',
      time: new Date().toLocaleTimeString(),
      index: 0,
      elements: [
        {
          type: 'loading',
          content: '',
        },
      ],
    };

    const botMessage = {
      origin: 'bot',
      time: new Date().toLocaleTimeString(),
      index: 0,
      elements: [
        {
          type: 'html-text',
          content: 'This is a bot response',
        },
      ],
    };

    const errorBotMessage = {
      origin: 'bot',
      time: new Date().toLocaleTimeString(),
      index: 0,
      elements: [
        {
          type: 'error',
          content:
            'Sorry, we are experiencing connection service connection issues.',
        },
      ],
    };

    setMessages((prevMessages: any) => {
      return [...prevMessages, userMessage, loadingBotMessage];
    });

    try {
      if (true) {
        setMessages((prevMessages: any) => {
          return [...prevMessages, userMessage, botMessage];
        });
      }
    } catch (error) {
      console.log('--ComposedChat handleSubmit Err', error);
    }
  };

  return (
    <div className="h-[70vh]">
      <CLABSChatComp
        disableHeaderFullscreen={true}
        disableHeaderMinimize={true}
        disableHeaderClose={true}
        loading={false}
        onSubmit={(e) => handleOnSubmit(e)}
        onUserMessageUpdateRequest={(e) => console.log(e)}
        onUserRegenerationRequest={(e) => console.log(e)}
        onUserFeedbackRequest={(e) => console.log(e)}
        onMessageElementSelected={(e) => console.log(e)}
        onChatFullscreenChange={(e) => console.log(e)}
        onChatDockingChange={(e) => console.log(e)}
        onChatClosed={(e) => console.log(e)}
        onHeaderMenuItemSelected={(e) => console.log(e)}
        onUserStreamInterrupt={(e) => console.log(e)}
        onMessageStreamingDone={(e) => console.log(e)}
        onMessageElementTagSelected={(e) => console.log(e)}
      >
        <CLABSMessagesList messages={messages} />
      </CLABSChatComp>
    </div>
  );
}

export default AssistantTwo;
