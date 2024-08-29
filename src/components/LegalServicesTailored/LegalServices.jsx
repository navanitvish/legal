import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8ace3f639488ce727dd1944162927d6032958f215860dcabab42fe810f85174?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Rental Agreements",
    description: "Hassle-Free Renting",
    aspectRatio: "1.06",
    minWidth: "244px",
    width: "600px"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ac032b7ad98f9e67948e28c9502c93d5c738664a9026426d3497c84c2a61eef?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Lease Agreements",
    description: "Secure Leases",
    aspectRatio: "1.06",
    minWidth: "244px"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbcd38a7bd53135f4e60360c2927ac45e93e440b3b66561717809ec7f4cb7110?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Commercial Documents",
    description: "Business Ready",
    aspectRatio: "1.63",
    minWidth: "244px"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f265603a09ba2ff19d1c9bc0980898c87a3177e49aa62fbb44f95ba187db43e?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Affidavits",
    description: "Sworn Statements",
    aspectRatio: "1.61",
    minWidth: "244px"
  }
];

function LegalServices() {
  return (
    <main className="flex flex-col p-16 mt-24 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <header className="flex flex-col w-full text-black max-md:max-w-full text-left">
        <p className="text-lg leading-loose max-md:max-w-full">
          Your One-Stop Solution for All Legal Documents.
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-snug max-md:max-w-full">
          Comprehensive Legal Services Tailored to Your Needs
        </h1>
      </header>
      <section className="flex flex-wrap gap-6 justify-center items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>
    </main>
  );
}

export default LegalServices;