'use client';

import { useState } from 'react';
import AssistantInput from './AssistantInput';
import { assistantCall } from './assistantCall';
import style from './Assistant.module.scss';

import type { Message } from './assistantCall';

import system from './system';
import AssistantMessages from './AssistantMessages';

const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: system },
  ]);

  const [loadingState, setLoadingState] = useState<'idle' | 'loading'>('idle');

  const triggerCall = async (messages: Message[]) => {
    setLoadingState('loading');
    const result = await assistantCall(messages);
    setLoadingState('idle');
    if (result.content === null) return;
    // @ts-expect-error TS doesn't seem to see that we test for it
    setMessages((messages) => [...messages, result]);
  };

  return (
    // TODO: Remove outerContainer that exists only for style
    <div className={style.outerContainer}>
      <div className={style.container}>
        <AssistantMessages messages={messages} loadingState={loadingState} />
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
    </div>
  );
};

export default Assistant;
