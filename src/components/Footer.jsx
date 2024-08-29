import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const footerLinks = [
  {
    title: "Features",
    items: ["Quick Access", "Expert Advice", "Secure Storage", "User Friendly", "24/7 Support"]
  },
  {
    title: "Products",
    items: ["Legal", "Rental", "Lease", "Commercial", "More"]
  },
  {
    title: "About Us",
    items: ["Mission", "Vision", "Team", "Careers", "Contact"]
  },
  {
    title: "Follow Us",
    items: ["LinkedIn", "Twitter", "Facebook", "Instagram", "YouTube"]
  }
];

function Footer() {
  return (
    <footer className="bg-white px-6 py-10 mt-16 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
        {/* Divider Line */}
        <div className="border-t border-gray-300 w-full"  />

        {/* Footer Links */}
        <div className="flex flex-wrap gap-8">
          {footerLinks.map((column, index) => (
            <div key={index} className="flex flex-col flex-1 min-w-[168px]">
              <h3 className="text-lg font-semibold text-gray-700">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 hover:text-gray-900 transition-colors">
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Branding */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full" />
              <h2 className="text-xl font-bold text-gray-800">Your Legal Partner</h2>
            </div>
            <p className="text-base text-gray-600">© 2023 Your Legal Partner LLC. All rights reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://www.linkedin.com" aria-label="Visit our LinkedIn page">
              <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.twitter.com" aria-label="Visit our Twitter page">
              <FaTwitter className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.facebook.com" aria-label="Visit our Facebook page">
              <FaFacebook className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.instagram.com" aria-label="Visit our Instagram page">
              <FaInstagram className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
            </a>
            <a href="https://www.youtube.com" aria-label="Visit our YouTube page">
              <FaYoutube className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
