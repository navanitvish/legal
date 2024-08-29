import React from "react";
import ServiceCard from "./ServiceCards";

const legalServices = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/95eb35084be6d9e5ec75e1caae6f03acf7ed36f62a6619fcd4a44553937ebf1d?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Notices",
    description: "Formal Alerts"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac9e4686da80e6fcd542168de84829bec492d7c40ae4ad219f43f425c74ca7ae?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Business Agreements",
    description: "Corporate Clarity"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a784314d9265164425a699334bcfeb30233cea44cf2dfb305b42540b12412c2f?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Employment Agreements",
    description: "Workplace Security"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/47430728a9afcca9581174d54757dc81a2154572d3dfb5a55f0f228e832e6e6e?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "E-commerce Contracts",
    description: "Online Transactions"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b0f0d31e9e5a5f20b6b233fd281832623bf3d6addf15ba22ed711b0c94cced9?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Intellectual Property",
    description: "IP Protection"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ab08847beb594fbcbb689bb98efc80b716d651c4fd25752f01e947b34fd2661?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Post-Contractual Matters",
    description: "After-Sale Service"
  }
];

function LegalServicesComponent() {
  return (
    <main className="flex flex-col p-16 mt-24 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <header className="flex flex-col items-start w-full text-center text-black max-md:max-w-full">
        <p className="text-lg leading-loose max-md:max-w-full">
          Expert Legal Guidance at Your Fingertips.
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-snug max-md:max-w-full">
          Explore Our Extensive Range of Legal Services
        </h1>
      </header>
      <section className="flex flex-wrap gap-6 justify-center items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
        {legalServices.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>
    </main>
  );
}

export default LegalServicesComponent;