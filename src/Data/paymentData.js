import master from '../assets/images/master.png';
import visa from '../assets/images/visa.png';
import googlePay from '../assets/images/googlePay.png';
import Appleplay from '../assets/images/Appleplay.png';

export const paymentData = {
  heading: "How to Buy?",
  subHeading: "Using Card",
  description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  footerText: "moonshot",
  paymentMethods: [
    {
      id: 1,
      name: "Mastercard Visa",
      images: [master, visa], 
      boxClasses: "bg-[#4A3B27] px-6 py-3 md:px-10 md:py-4 rounded-xl flex items-center justify-center gap-3 border-2 border-transparent hover:border-white/20 transition-all"
    },
    {
      id: 2,
      name: "Apple Pay GPay",
      images: [googlePay, Appleplay], 
      boxClasses: "bg-[#4A3B27] px-6 py-3 md:px-10 md:py-4 rounded-xl flex items-center justify-center gap-3 border-2 border-transparent hover:border-white/20 transition-all"
    }
  ]
};