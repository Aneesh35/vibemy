import { cn } from "@/lib/utils"

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  color?: "primary" | "secondary" | "muted"
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6", 
  lg: "h-8 w-8",
  xl: "h-12 w-12"
}

const colorMap = {
  primary: "border-primary",
  secondary: "border-secondary",
  muted: "border-muted-foreground"
}

export const Spinner = ({ 
  size = "md", 
  className,
  color = "primary" 
}: SpinnerProps) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-solid border-t-transparent",
        sizeMap[size],
        colorMap[color],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

// Convenience component for full-screen loading
export const FullScreenSpinner = ({ 
  size = "lg",
  color = "primary" 
}: Omit<SpinnerProps, "className">) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <Spinner size={size} color={color} />
    </div>
  )
}

// Convenience component for centered loading in a container
export const CenteredSpinner = ({ 
  size = "md",
  color = "primary",
  className 
}: SpinnerProps) => {
  return (
    <div className={cn("flex items-center justify-center p-4", className)}>
      <Spinner size={size} color={color} />
    </div>
  )
}
