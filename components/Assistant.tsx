'use client';

import { useEffect, useRef, useState } from 'react';
import AssistantInput from './AssistantInput';
import { assistantCall } from './assistantCall';
import style from './Assistant.module.scss';

import type { Message } from './assistantCall';

import system from './system';

const Assistant = () => {
  const singletonRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: system },
  ]);

  const triggerCall = async (messages: Message[]) => {
    const result = await assistantCall(messages);
    if (result.content === null) return;
    // @ts-expect-error TS doesn't seem to see that we test for it
    setMessages((messages) => [...messages, result]);
  };

  useEffect(() => {
    if (messages.length === 1) return; // Avoid scrolling on first render
    singletonRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
        <div ref={singletonRef} />
      </ol>
      <AssistantInput
        onInput={(message) => {
          const newMessages = [
            ...messages,
            {
              role: 'user' as const,
              content: message,
            },
          ];
          setMessages(newMessages);
          triggerCall(newMessages);
        }}
      />
    </div>
  );
};

export default Assistant;
