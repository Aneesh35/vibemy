// "use client"
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
const Page = async  () => {
  return <div>hello</div>
}

export default Page;