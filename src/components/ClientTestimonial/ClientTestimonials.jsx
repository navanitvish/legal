import React from 'react';
import ClientCard from './ClientCard';

const clients = [
  { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8a89e4858b928999bb95698f6f511d59c927ecbe2697ff5bdfb3f33e17b7a426?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977', imgAlt: 'Profile picture of Emily Johnson', name: 'Emily Johnson', title: 'Business Owner' },
  { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a54bb84bb61409adb3fb384b99a5d7f333f7b242a0eda3ada8c25f40771604a?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977', imgAlt: 'Profile picture of Michael Smith', name: 'Michael Smith', title: 'Real Estate Agent' },
  { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee4e84b859dddb4cf421dc657407f3930516ed9fbc8d592c64160b3a22995b82?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977', imgAlt: 'Profile picture of Sophia Brown', name: 'Sophia Brown', title: 'Freelancer' },
  { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e342b85adb395bc30a9216ca31917b0bf967f969db2aadac17515a42e8721843?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977', imgAlt: 'Profile picture of David Lee', name: 'David Lee', title: 'E-commerce Seller' },
  { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/897a818410c40fb877dec30b87033aace5a9724a97bfc774568a8b1ddabfad8e?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977', imgAlt: 'Profile picture of Olivia Taylor', name: 'Olivia Taylor', title: 'Lawyer' },
  { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/059cda97c144472d9e3d4b41b0898958120757a58ba2988ffa6003d9f053d0e9?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977', imgAlt: 'Profile picture of James Wilson', name: 'James Wilson', title: 'Landlord' },
  { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6777cb9514a3c9c4b02d470253a77d598eb21d20871c1da4a872b02e3eaad71d?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977', imgAlt: 'Profile picture of Isabella Martinez', name: 'Isabella Martinez', title: 'HR Manager' },
  { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5f37f98fb071dd971ed2114cf73dc6202d3b8ef4d75218c081715c046959ed0f?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977', imgAlt: 'Profile picture of Henry Davis', name: 'Henry Davis', title: 'Entrepreneur' },
];

function ClientTestimonials() {
  return (
    <section className="flex flex-col p-16 mt-24 w-full text-center bg-green-50 max-md:px-5 max-md:mt-10" aria-labelledby="client-testimonials-title">
      <header className="flex flex-col justify-center w-full max-md:max-w-full">
        <h2 id="client-testimonials-title" className="text-3xl font-bold leading-snug text-black max-md:max-w-full">What Our Clients Say</h2>
        <p className="mt-3 text-lg font-medium leading-loose text-stone-950 text-opacity-70 max-md:max-w-full">
          Join thousands of satisfied clients who trust us for their legal document needs.
        </p>
      </header>
      <div className="grid grid-cols-4 gap-6 mt-16 max-md:gap-4">
        {clients.slice(0, 8).map(client => (
          <ClientCard key={client.name} {...client} />
        ))}
      </div>
    </section>
  );
}

export default ClientTestimonials;
