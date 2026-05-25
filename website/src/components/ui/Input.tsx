import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full bg-navy-900 border border-navy-600 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
