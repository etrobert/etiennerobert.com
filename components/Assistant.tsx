'use client';

import { useEffect, useState } from 'react';
import { assistantCall } from './assistantCall';
import style from './Assistant.module.scss';

import type { Message } from './assistantCall';

const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'You are a helpful assistant.' },
  ]);

  const triggerCall = async (messages: Message[]) => {
    const result = await assistantCall(messages);
    if (result.content === null) return;
    // @ts-expect-error TS doesn't seem to see that we test for it
    setMessages((messages) => [...messages, result]);
  };

  useEffect(() => {
    triggerCall(messages);
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
          const newMessages = [
            ...messages,
            {
              role: 'user' as const,
              // @ts-expect-error TMP
              content: event.currentTarget.elements[0].value,
            },
          ];
          setMessages(newMessages);
          triggerCall(newMessages);
        }}
      >
        <input type="text" />
      </form>
    </div>
  );
};

export default Assistant;
