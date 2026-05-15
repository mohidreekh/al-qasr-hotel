import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Loader2 } from 'lucide-react'
import { sendContactEmail } from '../services/emailService'

export default function ContactForm() {
  const { t } = useTranslation()

  // Form State
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  
  const [isSending, setIsSending] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!fullName || !email || !message) {
      setSubmitStatus('error')
      return
    }

    try {
      setIsSending(true)
      setSubmitStatus('idle')

      await sendContactEmail({
        fullName,
        email,
        phoneNumber: phone,
        subject,
        message
      })

      setSubmitStatus('success')
      
      // Reset form
      setFullName('')
      setPhone('')
      setEmail('')
      setSubject('')
      setMessage('')
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
      
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="lg:col-span-7 bg-white rounded-[48px] p-8 sm:p-12 shadow-[0_30px_100px_rgba(48,71,89,0.06)] border border-[#304759]/5">
      <h2 className="font-['Kurale',serif] text-[clamp(32px,4vw,44px)] font-normal text-[#304759] mb-10">
        {t('contactPage.sendTitle')}
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="block text-[#304759]/70 font-['Kurale',serif] text-xl px-1">
              {t('contactPage.form.fullName')}
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-6 py-5 rounded-2xl bg-[#f8f9fa] border-none focus:bg-white focus:ring-[3px] focus:ring-[#304759]/10 outline-none transition-all text-[#304759] text-xl font-medium shadow-inner"
              placeholder={t('contactPage.form.fullName')}
            />
          </div>
          <div className="space-y-3">
            <label className="block text-[#304759]/70 font-['Kurale',serif] text-xl px-1">
              {t('contactPage.form.phone')}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-6 py-5 rounded-2xl bg-[#f8f9fa] border-none focus:bg-white focus:ring-[3px] focus:ring-[#304759]/10 outline-none transition-all text-[#304759] text-xl font-medium shadow-inner"
              placeholder="+970"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-[#304759]/70 font-['Kurale',serif] text-xl px-1">
            {t('contactPage.form.email')}
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-5 rounded-2xl bg-[#f8f9fa] border-none focus:bg-white focus:ring-[3px] focus:ring-[#304759]/10 outline-none transition-all text-[#304759] font-medium shadow-inner"
            placeholder="example@mail.com"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-[#304759]/70 font-['Kurale',serif] text-xl px-1">
            {t('contactPage.form.subject')}
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-6 py-5 rounded-2xl bg-[#f8f9fa] border-none focus:bg-white focus:ring-[3px] focus:ring-[#304759]/10 outline-none transition-all text-[#304759] font-medium shadow-inner"
            placeholder={t('contactPage.form.subject')}
          />
        </div>

        <div className="space-y-3">
          <label className="block text-[#304759]/70 font-['Kurale',serif] text-xl px-1">
            {t('contactPage.form.message')}
          </label>
          <textarea
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-6 py-5 rounded-2xl bg-[#f8f9fa] border-none focus:bg-white focus:ring-[3px] focus:ring-[#304759]/10 outline-none transition-all text-[#304759] text-xl font-medium shadow-inner resize-none"
            placeholder={t('contactPage.form.message')}
          ></textarea>
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="submit"
            disabled={isSending}
            className="mt-4 w-full sm:w-auto self-start px-12 py-5 rounded-2xl bg-[#304759] text-white font-['Kurale',serif] text-2xl font-medium shadow-[0_15px_40px_rgba(48,71,89,0.25)] hover:bg-[#1a2b38] hover:translate-y-[-3px] active:translate-y-[0px] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSending && <Loader2 className="w-5 h-5 animate-spin" />}
            {isSending ? t('bookingForm.sending') : t('contactPage.form.submit')}
          </button>
          
          {submitStatus === 'success' && (
            <p className="text-green-600 text-lg font-medium animate-fade-in">
              {t('bookingForm.successMessage')}
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-lg font-medium">
              {t('bookingForm.errorMessage')}
            </p>
          )}
        </div>
      </form>
    </section>
  )
}
