import { CopyIcon, CopyCheckIcon } from "lucide-react";
import { useState, useMemo, useCallback, Fragment } from "react";
import { Hint } from "@/components//hint";
import { Button } from "@/components/ui/button";
import { CodeView } from "@/components/code-view";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis
} from "@/components/ui/breadcrumb";

type FileCollection = { [path: string]: string }

function getLanguageExtension(filename: string): string {
    const extension = filename.split(".").pop()?.toLowerCase();
    return extension || "text"
}

interface FileExplorerProps {
    files: FileCollection
}

export const FileExplorer = ({ files }: FileExplorerProps) => {
    const [selectedFile, SetSelectedFile] = useState<string | null>(() => {
        const filekeys = Object.keys(files);
        return filekeys.length > 0 ? filekeys[0] : null
    })
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={30} minSize={30} className="bg-sidebar">
                <TreeView
                    data={[]}
                    value={selectedFile}
                    onSelect={() => { }}
                />
            </ResizablePanel>
            <ResizableHandle className="hover:bg-primary transition-colors" />
            <ResizablePanel defaultSize={70} minSize={50} className="bg-sidebar">
                {selectedFile && files[selectedFile] ? (
                    <div className="h-full w-full flex flex-col">
                        <div className="border-b bg-sidebar px-4 py-2 flex justify-between items-center gap-x-2">
                            <Hint text=" copy to clipboard" side="bottom">
                                <Button variant="outline"
                                    size="icon"
                                    className="ml-auto"
                                    onClick={() => { }}
                                    disabled={false}
                                >
                                    <CopyIcon />
                                </Button>
                            </Hint>
                        </div>
                        <div className="flex-1 overflow-auto">
                            <CodeView code={files[selectedFile]} lang={getLanguageExtension(selectedFile)} />
                        </div>
                    </div>
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        select a file to view it &apos;s content
                    </div>
                )}
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}