'use server';

import OpenAI from 'openai';

const openai = new OpenAI();

async function assistantCall() {
  const messages = [
    { role: 'user', content: "What's the weather like in Boston today?" },
  ];
  const tools = [
    {
      type: 'function',
      function: {
        name: 'get_current_weather',
        description: 'Get the current weather in a given location',
        parameters: {
          type: 'object',
          properties: {
            location: {
              type: 'string',
              description: 'The city and state, e.g. San Francisco, CA',
            },
            unit: { type: 'string', enum: ['celsius', 'fahrenheit'] },
          },
          required: ['location'],
        },
      },
    },
  ];

  // @ts-expect-error Code comes from documentation
  return await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages,
    tools: tools,
    tool_choice: 'auto',
  });
}

export { assistantCall };
