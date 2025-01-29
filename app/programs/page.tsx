import Programs from '@/components/Programs'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "What We Do | Gaba Hope For Kids",
  description:
    "Discover the impactful programs and initiatives that Gaba Hope For Kids offers to support underprivileged children in Uganda. From education to healthcare and youth empowerment, we are dedicated to making a difference.",
};

export default function page() {
  return (
    <div>
      <Programs/>
    </div>
  )
}
