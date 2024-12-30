import { Hero } from './components/hero'
import { Categories } from './components/categories'
import { FeaturedEvents } from './components/featured-events'
import { Testimonials } from './components/testimonials'
import { Blog } from './components/blog'
import { FAQ } from './components/faq'


import { Newsletter } from './components/newsletter'

export function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedEvents />
      <Testimonials />
      <Blog />
      <FAQ />
      <Newsletter />

    </>
  )
}

