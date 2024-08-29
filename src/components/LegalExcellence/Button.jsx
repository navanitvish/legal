import React from "react";

function Button({ variant, children }) {
  const baseClasses = "overflow-hidden gap-3 self-stretch px-4 rounded-xl border border-solid min-h-[44px]";
  const variantClasses = {
    primary: "text-white bg-blue-600 border-blue-600",
    secondary: "text-black bg-zinc-50 border-zinc-400"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
}

export default Button;