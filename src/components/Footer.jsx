import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
// import { useTranslation } from 'react-i18next';
// import LanguageSwitcher from './LanguageSwitcher';
// import LanguageSwitcher from './LanguageSwitcher'; 


const Footer = () => {
  // const { t } = useTranslation();
  return (
    <div className=" rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]">
      <footer className="bg-tertiary text-white py-6 text-center sm:px-6 max-w-7xl mx-auto sm:w-full md:w-1/2 rounded-2xl pb-8 flex flex-col items-center">

        <p className="text-secondary font-extrabold tracking-wide leading-6 p-2 m-2">
          Copyright 2024. All Rights Reserved
        </p>
        <h6 className='text-[14px] text-[#915EFF] uppercase tracking-wider'>
          We extend Our thanks to you
        </h6>

  
        <p className="text-sm mt-4 mb-6">
          We are always here to help. If you have any questions or need assistance,
          please feel free to reach out to us.
        </p>

      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="text-sm text-[#915EFF] bg-transparent border-2 border-[#915EFF] rounded-full px-6 py-2 transition-all duration-300 hover:bg-[#ffaa17] hover:text-white">
            Privacy Policy
          </button>
          <button className="text-sm text-[#915EFF] bg-transparent border-2 border-[#915EFF] rounded-full px-6 py-2 transition-all duration-300 hover:bg-[#ffaa17] hover:text-white">
            Terms of Use
          </button>
          <button className="text-sm text-[#915EFF] bg-transparent border-2 border-[#915EFF] rounded-full px-6 py-2 transition-all duration-300 hover:bg-[#ffaa17] hover:text-white">
            Refund Policy
          </button>
        </div>
        </div>

        {/* Support Email */}
        <h2 className="text-xl mt-6 mb-2">Support: support FAYCALTEAM.com</h2>

        {/* Font Awesome Icons */}
        <div className="flex justify-center space-x-4">
          <FontAwesomeIcon icon={faPaypal} size="2x" />
          <FontAwesomeIcon icon={faCcVisa} size="2x" />
          <FontAwesomeIcon icon={faCcMastercard} size="2x" />
        </div>
        {/* <LanguageSwitcher /> */}
      </footer>
    </div>
  );
};

export default Footer;
