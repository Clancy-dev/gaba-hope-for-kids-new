import Home from '@/components/Home'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Home | Gaba Hope For Kids",
  description:
    "Welcome to Gaba Hope For Kids, a nonprofit organization in Uganda committed to empowering children through education, healthcare, and community programs. Join us in making a difference today!",
};

export default function page() {
  return (
    <div>
      <Home/>
    </div>
  )
}
