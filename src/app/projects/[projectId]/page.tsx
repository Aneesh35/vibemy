import { getQueryClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import ProjectView from "@/modules/projects/ui/views/project-view";
import { ErrorFallback } from "@/components/error-fallback";
import { Suspense } from "react";
interface Props {
    params: Promise<{
        projectId: string
    }>
}

const Page = async ({ params }: Props) => {
    const { projectId } = await params;
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.messages.getMany.queryOptions({ projectId }))
    void queryClient.prefetchQuery(trpc.projects.getOne.queryOptions({ id: projectId }))
    return (<HydrationBoundary state={dehydrate(queryClient)}>
        <ErrorBoundary fallback={<ErrorFallback/>}>
            <Suspense fallback={<p>Loading.....</p>}>
                <ProjectView projectId={projectId} />
            </Suspense>
        </ErrorBoundary>
    </HydrationBoundary>);
}

export default Page;