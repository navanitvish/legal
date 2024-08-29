import React from 'react';
import UpdateCard from './UpdateCard';
import UpdateButton from './UpdateButton';

function UpdateNotification() {
  return (
    <main className="flex overflow-hidden flex-wrap gap-11 items-center p-16 mt-24 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <section className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[320px] max-md:max-w-full">
        <div className="flex flex-col w-full text-black max-md:max-w-full text-left">
          <h1 className="text-3xl font-bold leading-10 max-md:max-w-full">
            Stay Updated with Our Latest Version!
          </h1>
          <p className="mt-3 text-lg leading-7 max-md:max-w-full">
            Download the newest version of our app to access the latest features and improvements for seamless legal management.
          </p>
        </div>
        <div className="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <UpdateCard />
          <UpdateButton />
        </div>
      </section>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb8ad6cd76d4ccee8cd2b0b9d74a00c5e12a3dc95708bf80fcb61d94cbff05a?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977" 
        alt="Illustration of the latest app version" 
        className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[0.96] basis-0 min-w-[320px] max-md:max-w-full" 
      />
    </main>
  );
}

export default UpdateNotification;