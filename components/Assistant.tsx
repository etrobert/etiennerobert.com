'use client';

import { useEffect, useState } from 'react';
import { assistantCall } from './assistantCall';
import style from './Assistant.module.scss';

const Assistant = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    assistantCall().then((result) => {
      if (result === null) return;
      setMessages((messages) => [...messages, result]);
    });
  }, []);

  return (
    <div className={style.container}>
      <ol>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ol>
      <input type="text" />
    </div>
  );
};

export default Assistant;
