"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...{ disabled, ...props }}
        className={clsx(
          "flex gap-2 items-center justify-center",
          "whitespace-nowrap",
          "disabled:pointer-events-none",
          "outline-0 select-none",
          "rounded-lg border border-black",
          "py-3 px-2.5",
          props.className
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
