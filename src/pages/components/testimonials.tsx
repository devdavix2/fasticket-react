import { Card, CardContent } from "./components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Event Organizer",
    content: "Fasticket has revolutionized how we manage event ticketing. The platform is intuitive and reliable.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Regular Attendee",
    content: "I love how easy it is to find and book tickets for events. The mobile experience is fantastic!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Concert Promoter",
    content: "The best ticketing platform I've used. Great features and excellent customer support.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

