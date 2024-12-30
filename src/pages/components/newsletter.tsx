import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest events and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

