import AboutUs from '@/components/AboutUs'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About Us | Gaba Hope For Kids",
  description:
    "Gaba Hope For Kids is a nonprofit organization in Uganda dedicated to empowering children through education, healthcare, and community support programs.",
};


export default function page() {
  return (
    <div>
      <AboutUs/>     
    </div>
  )
}
