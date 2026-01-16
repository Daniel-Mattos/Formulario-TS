import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoaderProps {
  text: string;
  className?: string;
  size?: number;
}

export function Loader({ text, className, size = 24 }: LoaderProps) {
  return (
    <div className="flex items-center gap-2">
      <Loader2 
        size={size} 
        className={cn("animate-spin text-muted-foreground", className)} 
      />
      <span>{text}</span>
    </div>
  );
}