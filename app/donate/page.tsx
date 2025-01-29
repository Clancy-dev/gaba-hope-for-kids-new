import DonateSection from '@/components/DonateSection'
import ReviewSection from '@/components/ReviewSection'
import FinalSection from '@/components/FinalSection'
import HeroDonate from '@/components/HeroDonate'
import ThankYouSectionDonate from '@/components/ThankYouSectionDonate'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Donate | Gaba Hope For Kids",
  description:
    "Support Gaba Hope For Kids and help empower underprivileged children in Uganda. Your donation provides education, healthcare, and essential resources to children in need.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <HeroDonate />
      <DonateSection />
      <ThankYouSectionDonate />
      <ReviewSection />
      <FinalSection />
    </main>
  )
}

