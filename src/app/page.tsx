"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const [value, setValue] = useState<string>("");
  const {data:messages}=useQuery(trpc.messages.getMany.queryOptions())
  const createMessage = useMutation(trpc.messages.create.mutationOptions({onSuccess:()=>{
    toast.success("messages created")
  }}))
  return <div className="p-4 max-w-7xl mx-auto">
    <Input onChange={(e)=>setValue(e.target.value)} value={value} />
    <Button disabled={createMessage.isPending} onClick={()=>createMessage.mutate({value:value})}>
      Invoke the background Job
    </Button>
    {JSON.stringify(messages)}
  </div>
}

export default Page;