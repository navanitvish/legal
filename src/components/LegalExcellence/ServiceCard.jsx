import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-h-[148px] min-w-[320px]">
      <img loading="lazy" src={icon} alt="" className="object-contain self-center w-10 rounded-xl aspect-square" />
      <div className="flex flex-col mt-5 w-full">
        <h2 className="text-lg font-semibold leading-loose">{title}</h2>
        <p className="mt-2.5 text-base leading-6">{description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;