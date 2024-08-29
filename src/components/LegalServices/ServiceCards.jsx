import React from "react";

function ServiceCards({ image, title, description }) {
  return (
    <article className="flex overflow-hidden flex-col flex-1 shrink justify-center basis-0 min-h-[406px] min-w-[284px]">
      <img loading="lazy" src={image} alt={title} className="object-contain flex-1 w-full rounded-xl aspect-[1.05]" />
      <div className="flex flex-col justify-center mt-4 w-full min-h-[64px]">
        <h2 className="flex-1 text-xl font-semibold leading-relaxed text-black">
          {title}
        </h2>
        <p className="mt-4 text-lg font-medium leading-loose text-stone-950 text-opacity-70">
          {description}
        </p>
      </div>
    </article>
  );
}

export default ServiceCards;