import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";
import {Sandbox} from "@e2b/code-interpreter"
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event,step }) => {
    const sandboxId=await step.run("get-sandbox-id",async()=>{
      const sandbox=await Sandbox.create("vibemy-test2")
      return sandbox.sandboxId;
    });

    const codeAgent = createAgent({
      name: 'Code-agent',
      system:
        'You are an expert NextJs programmer. You write a readable,maintainable code. Write simple Next.js & react snippets. ',
      model: openai({ model: 'gpt-4o-mini' }),
    });
    const { output } = await codeAgent.run(`summarize the following topic ${event.data.prompt}`);

    const sandboxUrl=await step.run("get-sandbox-url",async()=>{
      const sandbox=await getSandbox(sandboxId);
      const host=sandbox.getHost(3000);
      return `https://${host}`;
    })
    
    return { output,sandboxUrl };
  }
);