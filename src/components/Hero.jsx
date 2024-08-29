import React from 'react';
import Button from './Button';

function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row mx-auto px-16 mt-16 w-full min-h-[604px] max-md:px-5 max-md:mt-10">
      {/* Text and Buttons */}
      <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 text-black lg:pr-16">
        <div className="flex overflow-hidden gap-2.5 justify-center items-center px-3 font-semibold bg-red-100 rounded-xl border border-solid border-stone-400 min-h-[40px]">
          <p className="text-lg leading-loose text-black text-center lg:text-left">
            Empowering Your Legal Needs
          </p>
          <span className="px-2.5 py-px text-sm leading-loose text-center text-blue-600 rounded-xl min-h-[24px]">
            Explore More
          </span>
        </div>
        <div className="flex flex-col mt-8 max-w-full text-black text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-[64px] max-md:text-4xl max-md:leading-[60px]">
            Your Trusted Partner in Legal Documentation
          </h1>
          <p className="mt-3 text-xl leading-relaxed max-md:text-lg">
            Offering comprehensive legal solutions tailored to your needs
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center mt-8 text-lg font-semibold leading-loose text-center lg:text-left">
          <Button variant="secondary">Learn More</Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
      {/* Image */}
      <div className="relative lg:w-1/2 lg:pl-16 lg:mt-16">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ca133966a9e0c972a54985ac1ded22cfa29645cd8ee79f53ab48b5ce8c0c20f?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977"
          className="object-cover w-full h-[605px] lg:h-[auto] lg:rounded-xl lg:shadow-lg"
          alt="Decorative background image"
        />
      </div>
    </section>
  );
}

export default Hero;
