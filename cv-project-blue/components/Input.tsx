import React from "react";
import clsx from "clsx";

type InputProps = {
  label?: string;
  type: "text" | "password" | "number";
  placeholder?: string;
  error?: string;
  className?: string;
};
const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, type, placeholder, error, className, ...restProps },
  ref
) => {
  return (
    <div className={clsx("flex flex-col relative", className)}>
      {label && (
        <label className="flex mb-2 text-sm font-medium text-left">
          {label}
        </label>
      )}
      <input
        className={clsx("flex w-full border p-2 bg-gray-300 rounded-md", {
          "border-black": !error,
          "border-red-600": error,
        })}
        {...restProps}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
      {error && (
        <p className="absolute mt-2 text-red-600 top-16 text-xs">{error}</p>
      )}
    </div>
  );
};

export default React.forwardRef(Input);
