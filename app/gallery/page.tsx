import Gallery from '@/components/Gallery'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Gallery | Gaba Hope For Kids",
  description:
    "Explore the impactful moments captured through our gallery, showcasing the children we empower, our educational initiatives, healthcare programs, and community outreach in Uganda.",
};

export default function page() {
  return (
    <div>
      <Gallery/>
    </div>
  )
}
