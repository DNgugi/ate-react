import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Terms of Service - A Team Edventures';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-white/80">
              Last Updated: May 1, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Please read these terms of service ("terms", "terms of service") carefully before using the A Team Edventures website ("website", "service") operated by A Team Edventures ("us", "we", "our").
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conditions of Use</h2>
            <p>
              By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. A Team Edventures only grants use and access of this website, its products, and its services to those who have accepted its terms.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Privacy Policy</h2>
            <p>
              Before you continue using our website, we advise you to read our <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-800">privacy policy</Link> regarding our user data collection. It will help you better understand our practices.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Age Restriction</h2>
            <p>
              You must be at least 18 (eighteen) years of age before you can use this website. By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement. A Team Edventures assumes no responsibility for liabilities related to age misrepresentation.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
            <p>
              You agree that all materials, products, and services provided on this website are the property of A Team Edventures, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the A Team Edventures's intellectual property in any way, including electronic, digital, or new trademark registrations.
            </p>
            <p>
              You grant A Team Edventures a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">User Accounts</h2>
            <p>
              As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.
            </p>
            <p>
              If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.
            </p>
            <p>
              We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Applicable Law</h2>
            <p>
              By visiting this website, you agree that the laws of the United States, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between A Team Edventures and you, or its business partners and associates.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Disputes</h2>
            <p>
              Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court in the United States and you consent to exclusive jurisdiction and venue of such courts.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Indemnification</h2>
            <p>
              You agree to indemnify A Team Edventures and its affiliates and hold A Team Edventures harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation on Liability</h2>
            <p>
              A Team Edventures is not liable for any damages that may occur to you as a result of your misuse of our website. A Team Edventures reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between A Team Edventures and the user, and this supersedes and replaces all prior agreements regarding the use of this website.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Services and Pricing</h2>
            <p>
              We reserve the right to modify the pricing structure for our services at any time. An email notification will be sent in the event of such changes. User accounts may be terminated if payment is not received according to the terms specified in the service agreement.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Refund and Cancellation Policy</h2>
            <p>
              Deposits for team-building events are non-refundable. Full payments made for services are refundable up to 30 days before the scheduled event, less the non-refundable deposit. Cancellations within 30 days of the event may be eligible for partial refunds at the discretion of A Team Edventures. Rescheduling options may be available subject to our calendar availability.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>By email: legal@ateamedventures.com</li>
              <li>By phone number: (123) 456-7890</li>
              <li>By mail: 123 Team Building Avenue, Adventure City, TX 12345</li>
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Contact Us With Questions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;