import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const BookingForm: React.FC = () => {
  const { t, i18n } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('');
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!fullName || !phoneNumber) {
    setSubmitStatus('error');
    return;
  }

  try {
    setIsSending(true);
    setSubmitStatus('idle');

        // EmailJS keys - these should be provided by the user later
    // For now, I'm setting up the structure
    const SERVICE_ID = 'service_rexjxhg';
    const TEMPLATE_ID = 'template_fsmbkdc';
    const PUBLIC_KEY = '3bjDk8iI2SzgcLGun';


    const templateParams = {
      fullName,
      phoneNumber: `${phoneNumber}`,
      checkIn,
      checkOut,
      roomType,
      adults,
      children,
    };

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    setSubmitStatus('success');

    // reset form
    setFullName('');
    setPhoneNumber('');
    setCheckIn('');
    setCheckOut('');
    setRoomType('');
    setAdults(1);
    setChildren(0);

  } catch (err) {
    console.error(err);
    setSubmitStatus('error');
  } finally {
    setIsSending(false);
  }
};


  return (
    <section className="w-full max-w-6xl mx-auto p-6 sm:p-10 md:p-16 relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] my-12 border border-[#304759]/5 transition-all duration-500">
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-12 relative z-10">
        
        {/* Personal Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Full Name */}
          <div className="flex flex-col gap-3 relative group text-start">
            <label className="text-[#304759] font-['Kurale',serif] text-xl md:text-2xl font-normal ms-6 transition-colors group-focus-within:text-[#E8B08F]">
              {t('bookingForm.fullNameLabel')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 ps-6 flex items-center pointer-events-none opacity-60">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#304759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t('bookingForm.fullNamePlaceholder')}
                className="w-full h-20 md:h-24 ps-16 pe-8 rounded-full bg-[#F3F3F5] text-[#304759] font-['Kurale',serif] text-lg md:text-xl border-2 border-transparent focus:border-[#40647B]/30 focus:bg-white focus:shadow-md focus:outline-none transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Phone Number with WhatsApp Prefix */}
          <div className="flex flex-col gap-3 relative group text-start">
            <label className="text-[#304759] font-['Kurale',serif] text-xl md:text-2xl font-normal ms-6 transition-colors group-focus-within:text-[#E8B08F]">
              {t('bookingForm.phoneLabel')}
            </label>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 start-0 ps-6 flex items-center pointer-events-none opacity-60 z-10">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#304759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="relative w-full">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder={t('bookingForm.phonePlaceholder')}
                  className="w-full h-20 md:h-24 ps-36 pe-8 rounded-full bg-[#F3F3F5] text-[#304759] font-['Kurale',serif] text-lg md:text-xl border-2 border-transparent focus:border-[#40647B]/30 focus:bg-white focus:shadow-md focus:outline-none transition-all duration-300"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Top Row: Check In, Check Out */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Check In */}
          <div className="flex flex-col gap-3 relative group text-start">
            <label className="text-[#304759] font-['Kurale',serif] text-xl md:text-2xl font-normal ms-6 transition-colors group-focus-within:text-[#E8B08F]">
              {t('bookingForm.checkInLabel')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 ps-6 flex items-center pointer-events-none opacity-60">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#304759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full h-20 md:h-24 ps-16 pe-8 rounded-full bg-[#F3F3F5] text-[#304759] font-['Kurale',serif] text-lg md:text-xl border-2 border-transparent focus:border-[#40647B]/30 focus:bg-white focus:shadow-md focus:outline-none transition-all duration-300 cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex flex-col gap-3 relative group text-start">
            <label className="text-[#304759] font-['Kurale',serif] text-xl md:text-2xl font-normal ms-6 transition-colors group-focus-within:text-[#E8B08F]">
              {t('bookingForm.checkOutLabel')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 ps-6 flex items-center pointer-events-none opacity-60">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#304759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || undefined}
                className="w-full h-20 md:h-24 ps-16 pe-8 rounded-full bg-[#F3F3F5] text-[#304759] font-['Kurale',serif] text-lg md:text-xl border-2 border-transparent focus:border-[#40647B]/30 focus:bg-white focus:shadow-md focus:outline-none transition-all duration-300 cursor-pointer"
                required
              />
            </div>
          </div>
        </div>

        {/* Middle Row: Room Type */}
        <div className="flex flex-col gap-3 relative group text-start">
          <label className="text-[#304759] font-['Kurale',serif] text-xl md:text-2xl font-normal ms-6 transition-colors group-focus-within:text-[#E8B08F]">
            {t('bookingForm.roomTypeLabel')}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-6 flex items-center pointer-events-none opacity-60">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#304759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full h-20 md:h-24 ps-16 pe-14 rounded-full bg-[#F3F3F5] text-[#304759] font-['Kurale',serif] text-lg md:text-xl border-2 border-transparent focus:border-[#40647B]/30 focus:bg-white focus:shadow-md focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
              required
            >
              <option value="" disabled>{t('bookingForm.roomTypePlaceholder')}</option>
              <option value="standard">{t('bookingForm.roomTypes.standard')}</option>
              <option value="deluxe">{t('bookingForm.roomTypes.deluxe')}</option>
              <option value="suite">{t('bookingForm.roomTypes.suite')}</option>
              <option value="penthouse">{t('bookingForm.roomTypes.penthouse')}</option>
            </select>
            <div className="absolute inset-y-0 end-0 pe-6 flex items-center pointer-events-none opacity-60">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#304759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Row: Adults, Children */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Number of Adults */}
          <div className="flex flex-col gap-3 relative group text-start">
            <label className="text-[#304759] font-['Kurale',serif] text-xl md:text-2xl font-normal ms-6 transition-colors group-focus-within:text-[#E8B08F]">
              {t('bookingForm.adultsLabel')}
            </label>
            <div className="relative">
               <div className="absolute inset-y-0 start-0 ps-6 flex items-center pointer-events-none opacity-60 z-10">
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#304759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                 </svg>
               </div>
               <div className="flex items-center w-full h-20 md:h-24 bg-[#F3F3F5] rounded-full border-2 border-transparent focus-within:border-[#40647B]/30 focus-within:bg-white focus-within:shadow-md transition-all duration-300 overflow-hidden px-4">
                   <button 
                     type="button" 
                     className={`w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#304759] hover:bg-[#E8B08F] hover:text-white transition-colors ${i18n.language === 'ar' ? 'mr-12' : 'ml-12'} shadow-sm`}
                     onClick={() => setAdults(prev => Math.max(1, prev - 1))}
                   >
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                   </button>
                   <input
                     type="number"
                     min="1"
                     value={adults}
                     onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                     className="w-full bg-transparent text-center text-[#304759] font-['Kurale',serif] text-2xl focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                     required
                   />
                   <button 
                     type="button" 
                     className={`w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#304759] hover:bg-[#E8B08F] hover:text-white transition-colors ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'} shadow-sm`}
                     onClick={() => setAdults(prev => prev + 1)}
                   >
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                   </button>
               </div>
            </div>
          </div>

          {/* Number of Children */}
          <div className="flex flex-col gap-3 relative group text-start">
            <label className="text-[#304759] font-['Kurale',serif] text-xl md:text-2xl font-normal ms-6 transition-colors group-focus-within:text-[#E8B08F]">
              {t('bookingForm.childrenLabel')}
            </label>
            <div className="relative">
               <div className="absolute inset-y-0 start-0 ps-6 flex items-center pointer-events-none opacity-60 z-10">
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#304759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                 </svg>
               </div>
               <div className="flex items-center w-full h-20 md:h-24 bg-[#F3F3F5] rounded-full border-2 border-transparent focus-within:border-[#40647B]/30 focus-within:bg-white focus-within:shadow-md transition-all duration-300 overflow-hidden px-4">
                   <button 
                     type="button" 
                     className={`w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#304759] hover:bg-[#E8B08F] hover:text-white transition-colors ${i18n.language === 'ar' ? 'mr-12' : 'ml-12'} shadow-sm`}
                     onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                   >
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                   </button>
                   <input
                     type="number"
                     min="0"
                     value={children}
                     onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                     className="w-full bg-transparent text-center text-[#304759] font-['Kurale',serif] text-2xl focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                   />
                   <button 
                     type="button" 
                     className={`w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#304759] hover:bg-[#E8B08F] hover:text-white transition-colors ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'} shadow-sm`}
                     onClick={() => setChildren(prev => prev + 1)}
                   >
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                   </button>
               </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex flex-col items-center gap-4 w-full">
          <button
            type="submit"
            disabled={isSending}
            className={`w-full lg:w-[600px] h-20 md:h-[100px] flex items-center justify-center bg-gradient-to-r from-[#203241] to-[#40647B] hover:from-[#1a2935] hover:to-[#335165] text-white font-['Kurale',serif] text-2xl md:text-3xl font-normal rounded-full shadow-[0_15px_30px_-10px_rgba(32,50,65,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(32,50,65,0.6)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {isSending ? (
              <div className="flex items-center gap-3">
                <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{t('bookingForm.sending')}</span>
              </div>
            ) : t('bookingForm.submitButton')}
          </button>
          
          {submitStatus === 'success' && (
            <p className="text-green-600 font-['Kurale',serif] text-xl animate-bounce">
              {t('bookingForm.successMessage')}
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 font-['Kurale',serif] text-xl">
              {t('bookingForm.errorMessage')}
            </p>
          )}
        </div>
      </form>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8B08F]/10 rounded-full blur-[80px] -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#40647B]/5 rounded-full blur-[100px] -z-0 pointer-events-none" />
    </section>
  );
};

export default BookingForm;

