import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";

const services = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a6033474b04a828fd4ca2c4a6f0513545e8bbeaef336379cd174fe5e72c7d5?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Rental Agreements",
    description: "Our rental agreements are meticulously crafted to ensure legal protection and clarity for both landlords and tenants."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/98828c5769850bb000e28ffeb82d960f02c04a2e33fd814e62b3868c847dd475?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Lease Agreements",
    description: "Secure long-term peace of mind with our comprehensive lease agreements, tailored to meet your needs."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/367028cb6c02d4c0b58891c24b21b474192b4bb6bbe766a555cec14e4953fd34?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Commercial Documents",
    description: "From affidavits to business agreements, we provide all the essential commercial documents you need."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/07e3bcd7e1364b03c09642e0b63c96066fdc6d1c64064b4de26bb712724398fe?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Employment Contracts",
    description: "Our employment agreements cover all aspects of employer-employee relations, ensuring compliance and mutual respect."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4c2e1125d2efdf69d85d38f09f5ef54125a780b62c4f619f5ff157cc4985581?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "E-commerce Contracts",
    description: "Navigate the digital marketplace with confidence using our robust e-commerce contracts."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97893a2ea947c738f683ff42b61a667e19049237e18cf33f9753c0a63317c5df?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977",
    title: "Property Wills",
    description: "Safeguard your legacy with our meticulously drafted wills and estate planning documents."
  }
];

function LegalServicesComponent() {
  return (
    <main className="flex overflow-hidden flex-col p-16 mt-24 w-full text-center bg-blue-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <section className="flex flex-col justify-center w-full max-md:max-w-full">
        <h1 className="w-full text-3xl font-bold leading-snug text-black max-md:max-w-full">
          Experience Legal Excellence
        </h1>
        <div className="flex gap-4 justify-center items-start self-center mt-8 text-lg font-semibold leading-loose">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </section>
      <section className="flex flex-wrap gap-8 items-start mt-16 w-full  text-black max-md:mt-10 max-md:max-w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>
    </main>
  );
}

export default LegalServicesComponent;