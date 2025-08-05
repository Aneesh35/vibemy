"use client"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable"
import { MessageContainer } from "../components/message-container";
import { Suspense, useState } from "react";
import { Fragment } from "@/generated/prisma";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectHeader } from "../components/project-header";
import { FragmentWeb } from "../components/fragment-web";
import { EyeIcon, CodeIcon, CrownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileExplorer } from "@/components/file-explorer";

interface Props {
    projectId: string
}

const ProjectView = ({ projectId }: Props) => {
    const [activeFragment, setActiveFragment] = useState<Fragment | null>(null);
    const [tabsState, setTabState] = useState<"preview" | "code">("preview")
    return (<div className="h-screen">
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={35} minSize={20} className="flex flex-col min-h-0" >
                <Suspense fallback={<p>Loading Project..</p>}>
                    <ProjectHeader projectId={projectId} />
                </Suspense>
                <Suspense fallback={<p>Loading Messages..</p>}>
                    <MessageContainer projectId={projectId} activeFragment={activeFragment} setActiveFragment={setActiveFragment} />
                </Suspense>
            </ResizablePanel>
            <ResizableHandle className="hover:bg-primary transition-colors"  />
            <ResizablePanel defaultSize={65} minSize={50}>
                <Tabs className="h-full gap-0"
                    defaultValue="preview"
                    value={tabsState}
                    onValueChange={(value) => setTabState(value as "preview" | "code")}>
                    <div className="w-full flex items-center p-2 border-b gap-x-2">
                        <TabsList className="h-1 p-4 border rounded-md">
                            <TabsTrigger value="preview" className="rounded-md p-3">
                                <EyeIcon /><span>Demo</span>
                            </TabsTrigger>
                            <TabsTrigger value="code" className="rounded-md p-2">
                                <CodeIcon /><span>Code</span>
                            </TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center gap-x-2">
                            <Button asChild size="sm" variant="default">
                                <Link href="/pricing">
                                    <CrownIcon />Upgrade
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="preview">
                        {!!activeFragment && <FragmentWeb data={activeFragment} />}
                    </TabsContent>
                    <TabsContent value="code" className="flex-1 min-h-0 h-full">
                        {!!activeFragment?.files && (
                            <FileExplorer files={activeFragment.files as { [path: string]: string }} />
                        )}
                    </TabsContent>
                </Tabs>
            </ResizablePanel>
        </ResizablePanelGroup>
    </div>);
}

export default ProjectView;