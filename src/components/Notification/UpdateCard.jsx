import React from 'react';

function UpdateCard() {
  return (
    <div className="flex overflow-hidden flex-col justify-center p-4 w-full bg-white rounded-xl border border-solid border-zinc-400 max-md:max-w-full">
      <div className="flex flex-wrap gap-3 items-start w-full max-md:max-w-full">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55e107ed71991f0c24d2d77968dfc19647851e2ae548f23df077e90229a78e57?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977" 
          alt="Update notification icon" 
          className="object-contain shrink-0 w-7 aspect-square" 
        />
        <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[160px] max-md:max-w-full">
          <h2 className="text-lg font-bold leading-loose text-black max-md:max-w-full">
            New Version Available
          </h2>
          <p className="mt-3 text-base font-medium leading-6 text-stone-950 text-opacity-70 max-md:max-w-full">
            Click here to download the latest version and enhance your legal documentation experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpdateCard;