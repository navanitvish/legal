import React from "react";

function ServiceCard({ image, title, description, aspectRatio, minWidth, width }) {
  return (
    <article className={`flex overflow-hidden flex-col justify-center min-h-[406px] ${width ? `w-[${width}]` : 'flex-1 shrink basis-0'}`} style={{ minWidth }}>
      <img
        loading="lazy"
        src={image}
        alt={`${title} service illustration`}
        className={`object-cover flex-1 w-full rounded-xl aspect-[${aspectRatio}] max-md:max-w-full`}
      />
      <div className="flex flex-col justify-center mt-4 w-full max-md:max-w-full text-left">
        <h2 className="text-xl font-semibold leading-relaxed text-black max-md:max-w-full">
          {title}
        </h2>
        <p className="mt-3 text-lg font-medium leading-loose text-stone-950 text-opacity-70 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
}

export default ServiceCard;