# Al Qasr Hotel

A luxury hotel web application providing seamless booking experiences, multilingual support, and interactive service showcases.

## Live Demo

https://al-qasr-hotel.netlify.app

## Features

- **Luxury Booking System**: Interactive room and package reservation forms.
- **Multilingual Support**: Internationalization (i18n) supporting multiple language switching.
- **Email Integration**: Automated booking requests and contact submissions using EmailJS.
- **Accessibility & Customization**: Built-in accessibility theme controls and responsive design.
- **Performance Optimized**: Fast client-side rendering with Vite and optimized image components.

## Tech Stack

- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Localization**: i18next & react-i18next
- **Email Service**: EmailJS
- **Icons**: Lucide React

## Installation

```bash
# Clone the repository
git clone https://github.com/mohidreekh/al-qasr-hotel.git
cd al-qasr-hotel

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory and configure the following EmailJS variables:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_TEMPLATE_BOOKING=your_booking_template_id
VITE_EMAILJS_TEMPLATE_CONTACT=your_contact_template_id
```

## Project Structure

```
al-qasr-hotel/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── lib/
│   ├── locales/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.tsx
│   ├── i18n.ts
│   ├── index.css
│   └── main.tsx
├── .env
├── index.html
├── package.json
└── vite.config.ts
```
