import React from 'react';

function Button({ children, variant = 'primary' }) {
  const baseClasses = "overflow-hidden gap-3 self-stretch px-4 text-lg font-semibold leading-loose text-center rounded-xl border border-solid min-h-[20px]";
  const variantClasses = {
    primary: "text-white bg-blue-600 border-blue-600",
    secondary: "text-stone-950 text-opacity-70 bg-zinc-50 border-zinc-400"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
}

export default Button;