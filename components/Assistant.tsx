'use client';

import { useRef, useState } from 'react';
import { assistantCall } from './assistantCall';
import style from './Assistant.module.scss';

import type { Message } from './assistantCall';

import system from './system';

const Assistant = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: system },
  ]);

  const triggerCall = async (messages: Message[]) => {
    const result = await assistantCall(messages);
    if (result.content === null) return;
    // @ts-expect-error TS doesn't seem to see that we test for it
    setMessages((messages) => [...messages, result]);
  };

  return (
    <div className={style.container}>
      <ol className={style.messages}>
        {messages
          .filter(({ role }) => role !== 'system')
          .map((message, index) => (
            <li key={index}>
              {message.role === 'user' ? 'You' : 'Assistant'}
              <br /> {/* TODO Remove br */}
              {message.content}
            </li>
          ))}
      </ol>
      <form
        className={style.form}
        onSubmit={(event) => {
          event.preventDefault();
          if (inputRef.current === null) return;

          const newMessages = [
            ...messages,
            {
              role: 'user' as const,
              content: inputRef.current.value,
            },
          ];
          inputRef.current.value = '';
          setMessages(newMessages);
          triggerCall(newMessages);
        }}
      >
        <input
          ref={inputRef}
          className={style.input}
          type="text"
          placeholder="Message the assistant..."
        />
      </form>
    </div>
  );
};

export default Assistant;
