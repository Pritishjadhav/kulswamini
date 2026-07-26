import { Heart, Phone, Mail, MapPin, Building2, CreditCard, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import './About.css';
import './Donate.css';

const Donate = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bankDetails = [
    { label: 'Account Holder Name', value: 'Kulswamini Pratishthan, Pune', field: 'accountName' },
    { label: 'Bank Name', value: 'Bank Of Baroda', field: 'bankName' },
    { label: 'Account Number', value: '41970200000378', field: 'accountNumber' },
    { label: 'MICR CODE', value: '411012043', field: 'micrCode' },
    { label: 'IFSC CODE', value: 'BARB0SANGHV', field: 'ifscCode', note: 'Fifth character is 0 (Zero)' }
  ];

  return (
    <div className="page-container animate-fade-in">
      {/* Hero Section */}
      <div className="donate-hero">
        <div className="donate-hero-overlay"></div>
        <div className="container">
          <div className="donate-hero-content">
            <Heart className="donate-hero-icon" size={64} />
            <h1 className="donate-hero-title">Support Our Mission</h1>
            <p className="donate-hero-subtitle">
              Your generous contribution helps us continue our work in serving communities, 
              protecting the environment, and empowering lives across Maharashtra.
            </p>
          </div>
        </div>
      </div>

      {/* Bank Details Section */}
      <section className="bank-details-section">
        <div className="container">
          <div className="bank-details-container">
            <div className="bank-header">
              <Building2 className="bank-icon" size={48} />
              <h2>Choose Your Donation Method</h2>
              <p>Support our mission through bank transfer or UPI payment</p>
            </div>

            <div className="payment-methods-grid">
              {/* Bank Details */}
              <div className="payment-method-card">
                <h3 className="payment-method-title">Bank Transfer (NEFT/RTGS/IMPS)</h3>
                <div className="bank-details-list">
                  {bankDetails.map((detail, index) => (
                    <div key={index} className="bank-detail-row">
                      <div className="bank-detail-content">
                        <span className="bank-detail-label">{detail.label}</span>
                        <div className="bank-detail-value-container">
                          <span className="bank-detail-value">{detail.value}</span>
                          {detail.note && (
                            <span className="bank-detail-note">{detail.note}</span>
                          )}
                        </div>
                      </div>
                      <button
                        className="copy-button"
                        onClick={() => copyToClipboard(detail.value, detail.field)}
                        aria-label={`Copy ${detail.label}`}
                      >
                        {copiedField === detail.field ? (
                          <CheckCircle size={20} className="copy-icon-success" />
                        ) : (
                          <Copy size={20} />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* QR Code */}
              <div className="payment-method-card">
                <h3 className="payment-method-title">Scan QR Code (UPI)</h3>
                <div className="qr-code-content">
                  <p className="qr-subtitle">Use any UPI app to scan and donate instantly</p>
                  <div className="qr-code-image-wrapper">
                    <img 
                      src="/events/Bank Qr.jpeg" 
                      alt="Bank QR Code for Donations" 
                      className="qr-code-image"
                    />
                  </div>
                  <p className="qr-merchant-name">
                    <strong>Merchant Name:</strong> KULSWAMINI PRATISHTHAN PUNE
                  </p>
                  <p className="qr-instruction">
                    Scan with Google Pay, PhonePe, Paytm, or any UPI app
                  </p>
                  
                  {/* UPI ID Section */}
                  <div className="upi-id-container">
                    <div className="upi-id-row">
                      <div className="upi-id-content">
                        <span className="upi-id-label">UPI ID</span>
                        <span className="upi-id-value">kulsw93250378@barodampay</span>
                        <span className="merchant-name">
                          <strong>Merchant Name:</strong> KULSWAMINI PRATISHTHAN PUNE
                        </span>
                      </div>
                      <button
                        className="upi-copy-button"
                        onClick={() => copyToClipboard('kulsw93250378@barodampay', 'upiId')}
                        aria-label="Copy UPI ID"
                      >
                        {copiedField === 'upiId' ? (
                          <CheckCircle size={22} className="upi-copy-icon-success" />
                        ) : (
                          <Copy size={22} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bank-note">
              <CreditCard size={24} />
              <div className="bank-note-content">
                <p>
                  <strong>Important:</strong> After making the donation, please submit your transaction 
                  details for acknowledgment and tax receipt.
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdXSKomO2X3nQ-CFB69b_HGYMvVYtHonm3_uNHrATKOnbG9ig/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="form-button"
                >
                  Submit Transaction Details
                </a>
                <p className="form-note">
                  You can also send details via email or WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="donate-contact-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Get in Touch</h2>
            <p>Have questions about donations? We're here to help</p>
          </div>

          <div className="donate-contact-grid">
            <div className="donate-contact-card">
              <div className="contact-icon-wrapper">
                <Phone size={32} />
              </div>
              <h3>Call Us</h3>
              <a href="tel:+919922401862" className="contact-link">
                +91 99224 01862
              </a>
              <p className="contact-description">Monday - Saturday, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="donate-contact-card">
              <div className="contact-icon-wrapper">
                <Mail size={32} />
              </div>
              <h3>Email Us</h3>
              <a href="mailto:kulswaminipratishthan@gmail.com" className="contact-link">
                kulswaminipratishthan@gmail.com
              </a>
              <p className="contact-description">We'll respond within 24 hours</p>
            </div>

            <div className="donate-contact-card">
              <div className="contact-icon-wrapper">
                <MapPin size={32} />
              </div>
              <h3>Visit Us</h3>
              <p className="contact-address">
                Manas B-1, Samarth Nagari, Sector No. 3, Spine Road, Bhosari, Pune 411039
              </p>
              <p className="contact-description">F.No. 46452</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="thank-you-section">
        <div className="container">
          <div className="thank-you-content">
            <Heart className="thank-you-icon" size={56} />
            <h2>Thank You for Your Support</h2>
            <p>
              Your generosity enables us to continue our mission of serving communities, 
              protecting the environment, and creating opportunities for those in need. 
              Together, we're building a better tomorrow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
