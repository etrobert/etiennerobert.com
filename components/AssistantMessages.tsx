import { useEffect, useRef } from 'react';
import style from './AssistantMessages.module.scss';

import type { Message } from './assistantCall';

type Props = {
  messages: Message[];
  loadingState: 'idle' | 'loading';
};

const AssistantMessages = ({ messages, loadingState }: Props) => {
  const singletonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 1) return; // Avoid scrolling on first render
    singletonRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
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
      {loadingState === 'loading' && 'loading...'}
      <div ref={singletonRef} />
    </ol>
  );
};

export default AssistantMessages;
