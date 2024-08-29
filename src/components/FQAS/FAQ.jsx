import React from 'react';
import FAQItem from './FAQItem';

const faqItems = [
  {
    question: "What types of agreements do you offer?",
    answer: "We offer a wide range of agreements including rental agreements, lease agreements, commercial documents, affidavits, and more. Our services cover both personal and business legal needs."
  },
  {
    question: "How can I connect with a lawyer?",
    answer: "You can connect with a lawyer through our 'Lawyer's Connect' portal. Simply sign up or log in, and browse through a list of seasoned professionals ready to assist you with your legal needs."
  },
  {
    question: "Do you provide offline services?",
    answer: "Yes, we do. Our offline services include e-commerce contracts, intellectual property agreements, post-contractual matters, and real estate-related agreements. You can schedule a consultation to discuss your specific requirements."
  },
  {
    question: "What is included in a commercial document?",
    answer: "A commercial document includes all the necessary legal paperwork required for business operations, such as contracts, agreements, and notices. It ensures that your business complies with legal standards and operates smoothly."
  },
  {
    question: "Can you assist with intellectual property agreements?",
    

    answer: "Absolutely! Our experts specialize in intellectual property agreements, ensuring your innovations, trademarks, and creations are legally protected. We help you navigate the complexities of IP laws effortlessly."
  },
  {
    question: "What is the process for a power of attorney?",
    answer: "The process for a power of attorney involves appointing someone to make decisions on your behalf. We guide you through drafting the document, ensuring it meets all legal requirements and reflects your needs accurately."
  }
];

function FAQ() {
  return (
    <section className="flex overflow-hidden flex-col justify-center p-16 mt-24 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full text-center max-md:max-w-full">
        <h2 className="text-3xl font-bold leading-snug text-black max-md:max-w-full">Common Questions Answered</h2>
        <p className="mt-3 text-lg font-medium leading-loose text-stone-950 text-opacity-70 max-md:max-w-full">Your Queries Solved</p>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;