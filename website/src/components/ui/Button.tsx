"use client";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:pointer-events-none disabled:opacity-40 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600 active:scale-[0.98]",
        secondary: "bg-navy-700 text-white hover:bg-navy-600 active:scale-[0.98]",
        outline: "border border-navy-600 text-slate-200 hover:bg-navy-800 active:scale-[0.98]",
        ghost: "text-slate-300 hover:text-white hover:bg-navy-800",
        link: "text-blue-400 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "text-sm px-4 py-2 rounded-lg",
        md: "text-base px-6 py-3 rounded-xl",
        lg: "text-base px-8 py-4 rounded-xl",
        icon: "w-10 h-10 rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
