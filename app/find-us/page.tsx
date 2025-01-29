import FindUs from '@/components/FindUs'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Find Us | Gaba Hope For Kids",
  description:
    "Discover how to reach Gaba Hope For Kids in Wakiso Mutundwe, Kampala. Find our contact details, location, and other ways to connect with us and support our mission for children.",
};

export default function page() {
  return (
    <div>
      <FindUs/>
    </div>
  )
}
