import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 w-full">
      <button
        className="flex relative gap-4 items-start px-6 pt-5 pb-6 w-full text-lg font-medium leading-loose text-black rounded-xl border border-solid bg-zinc-50 border-zinc-400 max-md:px-5 max-md:max-w-full"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="flex-1 shrink pr-8 min-w-[240px] text-left max-md:max-w-full">{question}</span>
        <span className="absolute right-6 top-2/4 z-0 shrink-0 w-7 h-7 -translate-y-2/4">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pt-4 pb-6 mt-2 text-base leading-7 text-stone-950 text-opacity-70 bg-white rounded-xl border border-solid border-zinc-400 max-md:px-5 max-md:max-w-full">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQItem;