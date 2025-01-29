import BlogList from '@/components/BlogList'
import LetterPullup from '@/components/ui/letter-pullup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog | Gaba Hope For Kids",
  description:
    "Stay updated with the latest news, stories, and updates from Gaba Hope For Kids. Read about our initiatives, success stories, and how we are making a difference in the lives of children in Uganda.",
};

export default function Home() {
  return (
    <main className="min-h-screen mt-[72px] bg-blue-100 py-12">

      <section className="py-16 bg-yellow-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-8"><LetterPullup words={"Our Blog"} delay={0.07} /></h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Follow our stories about how we are empowering children and youth.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 mt-8">
        <BlogList />
      </div>
    </main>
  )
}

