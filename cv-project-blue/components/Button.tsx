import React from "react";

import clsx from "clsx";

type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
};

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { text, variant = "primary", className, type = "button" },
  ref
) => {
  return (
    <button
      className={clsx("flex px-4 py-2 rounded-lg", className, {
        "bg-blue-600": variant === "primary",
        "bg-green-600": variant === "secondary",
      })}
      type={type}
    >
      {text}
    </button>
  );
};

export default React.forwardRef(Button);
