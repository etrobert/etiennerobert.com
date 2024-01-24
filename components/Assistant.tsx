'use client';

import { useEffect, useState } from 'react';
import { assistantCall } from './assistantCall';
import style from './Assistant.module.scss';

type Message = {
  role: 'user' | 'assistant';
  content: string | null;
};

const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages((messages) => [...messages, message]);
  };

  const triggerCall = async () => {
    addMessage(await assistantCall());
  };

  useEffect(() => {
    triggerCall();
  }, []);

  return (
    <div className={style.container}>
      <ol>
        {messages.map((message, index) => (
          <li key={index}>{message.content}</li>
        ))}
      </ol>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addMessage({
            role: 'user',
            // @ts-expect-error TMP
            content: event.currentTarget.elements[0].value,
          });
          triggerCall();
        }}
      >
        <input type="text" />
      </form>
    </div>
  );
};

export default Assistant;
