import React from 'react';
import Header from './Header';
import EmailSignIn from './EmailSignIn';
import GetStartedButton from './GetStartedButton';
import PrivacyPolicy from './PrivacyPolicy';

function LegalAgreementsPage() {
  return (
    <main className="flex overflow-hidden flex-wrap gap-11 items-center p-16 mt-24 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <section className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[320px] max-md:max-w-full">
        <Header />
        <form className="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full text-left">
          <div className="flex flex-col w-full max-md:max-w-full">
            <EmailSignIn />
            <GetStartedButton />
          </div>
          <PrivacyPolicy />
        </form>
      </section>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9fffebe265647a1a44c35d8b5dd602ce03ef8d9d144cc52963627d5b59f409d?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977" 
        alt="Legal agreements illustration" 
        className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[0.96] basis-0 min-w-[320px] max-md:max-w-full rounded-lg" 
      />
    </main>
  );
}

export default LegalAgreementsPage;