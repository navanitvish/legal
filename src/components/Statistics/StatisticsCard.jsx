import React from 'react';

function StatisticsCard({ icon, title, value }) {
  return (
    <div className="flex flex-col flex-1 shrink p-6 border border-solid basis-0 border-zinc-400 min-w-[261px] max-md:px-5">
      <img loading="lazy" src={icon} alt="" className="object-contain self-center w-11 rounded-xl aspect-square" />
      <div className="mt-3 text-lg font-medium leading-loose text-stone-950 text-opacity-70">
        {title}
      </div>
      <div className="mt-3 text-4xl font-bold leading-none text-black">
        {value}
      </div>
    </div>
  );
}

export default StatisticsCard;