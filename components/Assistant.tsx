'use client';

import { useEffect, useRef, useState } from 'react';
import { assistantCall } from './assistantCall';
import style from './Assistant.module.scss';

import type { Message } from './assistantCall';

const system = `
You are Étienne Robert's assistant, available on his personal website to provide information about him.
Étienne is a 27 years old software engineer and queer creative.
He's been coding since he was 14 years old and has been working professionally since 2017.

Below is his CV:


Senior Software Engineer
Doctolib · Full-time
Mar 2022 - Oct 2023 · 1 yr 8 mos
Berlin, Germany · Hybrid
- Team Lead of a Performance Focused team
- TypeScript Community Lead
- Diversity Equity and Inclusivity Advocate
Skills: Leadership · TypeScript · JavaScript · React.js · Git

Front-end Software Developer
erasys GmbH · Full-time
Dec 2020 - Oct 2021 · 11 mos
Berlin, Germany
- Development and maintenance of a multi-milion user dating website
- New code written in Typescript using React, Redux and Redux-Saga
- Development and maintenance of a complex UI working closely with designers using modern CSS, styled-components and Figma
- Development and maintenance of a components library using Storybook
- Developer environment using Webpack, Eslint, Visual Studio Code
- Systematic unit testing using Jest
- Work in a Scrum environment with systematic and thorough code reviews
- Migration and maintenance of legacy code written in Backbone Marionette

Interesting sub projects I was heavily involved in:
- Emoji support, including emoji keyboard and inplace emoji replacement
- World map with live visualisation of user sign ins
Skills: TypeScript · JavaScript · React.js · Bash · Git

Backend Software Developer (C++)
Asaphus Vision GmbH · Full-time
Jul 2020 - Aug 2020 · 2 mos
Berlin, Allemagne
My experience within Asaphus, a Machine Vision's startup:
- Development and maintenance of the C++ Machine Vision pipeline
Skills: C · C++ · Bash · Git · Computer Vision · Machine Vision

Freelance Software Developer
Freelance · Self-employed
Mar 2019 - Jul 2020 · 1 yr 5 mos
Région de Paris, France
Translation of client needs into a software solution
Various projects:
- French Customs' LDAP Client (Java)
- Dating website (PHP, JavaScript...)
- Tasks management website (NodeJS, Angular, PostgreSQL...)
- Security company Network Scanner Interface (Python)
Skills: TypeScript · JavaScript · React.js · Bash · Git · Java

Backend Software Developer (C++)
Scortex · Full-time
Jul 2017 - May 2018 · 11 mos
Région de Paris, France
My experience within Scortex, a Machine Vision's startup:
- Architecture, development and maintenance of an industrial camera driver in C++
- Development and maintenance of the C++ Machine Vision pipeline
- Implementation and explotation of network protocols (GigE Vision, UDP/TCP...)
- Low level UNIX/Linux work, both through programming (C++) and scripting (bash...)
- Project management: Research and implementation of Scrum/Kanban techniques within my team
- Machine learning & Deep learning surface experience
Skills: C · C++ · Bash · Git · Computer Vision · Machine Vision

Étienne is a queer creative, he loves dance and has been involved in multiple projects in Bordeaux, Paris and Berlin.
He has a passion for makeup and has been doing drag in Paris.
He also loves fashion design and sewing, and has been designing costumes and everyday clothes for years.
He has been hosting Art events in Berlin, allowing everyone to dip their hands in paint, music, dance, makeup, sewing, coding and more.
`;

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
        {messages.map((message, index) => (
          <li key={index}>
            {message.role}
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
