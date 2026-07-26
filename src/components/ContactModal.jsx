import { useState } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, phoneNumber, personName }) => {
  if (!isOpen) return null;

  const handlePhoneCall = () => {
    const cleanNumber = phoneNumber.replace(/\s+/g, '');
    window.open(`tel:${cleanNumber}`, '_self');
    onClose();
  };

  const handleWhatsApp = () => {
    const cleanNumber = phoneNumber.replace(/\s+/g, '').replace('+91', '91');
    const message = `Hello ${personName || ''}, I found your contact through Kulswamini Pratishthan website.`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="contact-modal-header">
          <h3>Contact {personName || 'Member'}</h3>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        