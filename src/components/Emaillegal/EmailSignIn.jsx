import React from 'react';

function EmailSignIn() {
  return (
    <div className="flex flex-col justify-center w-full text-base font-medium min-h-[44px] text-stone-950 text-opacity-70 max-md:max-w-full">
      <div className="flex overflow-hidden gap-2.5 items-center px-4 w-full bg-white rounded-xl border border-solid border-zinc-400 min-h-[44px] max-md:max-w-full">
        <label htmlFor="emailInput" className="sr-only">Sign in with Email</label>
        <input 
          id="emailInput"
          type="email" 
          placeholder="Sign in with Email"
          className="flex-1 shrink gap-2.5 self-stretch my-auto w-full min-w-[240px] max-md:max-w-full"
          aria-label="Sign in with Email"
        />
      </div>
    </div>
  );
}

export default EmailSignIn;