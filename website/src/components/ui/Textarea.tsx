import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full bg-navy-900 border border-navy-600 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-none",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
