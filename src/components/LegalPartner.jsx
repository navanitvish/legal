import React from 'react';
import Header from './Header';
import Hero from './Hero';
import LegalServices from './LegalServicesTailored/LegalServices';
import Notification from './Notification/UpdateNotification';
import Footer from './Footer';
import LegalService from './LegalServices/LegalServicesComponent';
import StatisticsSection from './Statistics/StatisticsSection';
import ClientTestimonials from './ClientTestimonial/ClientTestimonials';
import EmailSignIn from './Emaillegal/LegalAgreementsPage';
import FQAS from './FQAS/FAQ'
import LegalServicesComponent from './LegalExcellence/LegalServicesComponent';
function LegalPartner() {
  return (
    <div className="flex overflow-hidden flex-col bg-white min-w-[320px]">
      <Header />
      <main>
        <Hero />
        <StatisticsSection/>
        <EmailSignIn/>
        <LegalServices/>
      
        <LegalService/>
        <LegalServicesComponent/>
        <ClientTestimonials />
        <FQAS/>
     
      
        <Notification/>
      </main>
      <Footer />
    </div>
  );
}

export default LegalPartner;