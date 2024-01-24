'use server';

import OpenAI from 'openai';

const openai = new OpenAI();

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

async function assistantCall(messages: Message[]) {
  const result = await openai.chat.completions.create({
    messages,
    model: 'gpt-4',
  });
  return result.choices[0].message;
}

export { assistantCall };
export type { Message };
