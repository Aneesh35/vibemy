import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: 'Code-agent',
      system:
        'You are an expert NextJs programmer. You write a readable,maintainable code. Write simple Next.js & react snippets. ',
      model: openai({ model: 'gpt-4o-mini' }),
    });
    const { output } = await codeAgent.run(`summarize the following topic ${event.data.prompt}`);
    return { output };
  }
);