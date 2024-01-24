'use server';

import OpenAI from 'openai';

const openai = new OpenAI();

async function assistantCall() {
  const result = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-4',
  });
  return result.choices[0].message.content;
}

export { assistantCall };
