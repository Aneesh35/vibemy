"use client"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                        Something went wrong
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                        We encountered an unexpected error. Please try again or return to the homepage.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Alert className="border-red-200 bg-red-50">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <AlertTitle className="text-red-800">Error Details</AlertTitle>
                        <AlertDescription className="text-red-700">
                            An unexpected error occurred while processing your request.
                        </AlertDescription>
                    </Alert>
                </CardContent>

                <CardFooter className="flex flex-col space-y-2">
                    <Button
                        className="w-full"
                        variant="default"
                        onClick={() => {
                            window.location.reload()
                        }}
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                    </Button>
                    <Link href={"/"} className="w-full">
                        <Button
                            variant="outline"
                            className="w-full"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Go to Homepage
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ErrorPage;