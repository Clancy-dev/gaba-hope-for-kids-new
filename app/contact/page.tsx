import ContactUs from '@/components/ContactUs'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Us | Gaba Hope For Kids",
  description:
    "Get in touch with Gaba Hope For Kids to learn more about our mission, volunteer opportunities, or to inquire about supporting our programs for children in Uganda. We're here to help! Contact us at +256 708 856553 or +256 787 343415.",
};


export default function page() {
  return (
    <div>
      <ContactUs/>      
    </div>
  )
}
