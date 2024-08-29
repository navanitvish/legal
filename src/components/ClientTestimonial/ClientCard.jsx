import React from 'react';

function ClientCard({ imgSrc, imgAlt, name, title }) {
  return (
    <article className="flex flex-col flex-1 py-4 rounded-xl basis-0 min-w-[250px]">
      <img 
        loading="lazy" 
        src={imgSrc} 
        alt={imgAlt} 
        className="object-contain self-center w-20 aspect-square min-h-[80px] rounded-full"
      />
      <div className="flex flex-col mt-6 w-full text-center">
        <div className="font-medium text-black">{name}</div>
        <div className="mt-3 text-zinc-900 text-opacity-40">{title}</div>
      </div>
    </article>
  );
}

export default ClientCard;
