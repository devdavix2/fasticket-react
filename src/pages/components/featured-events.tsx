import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Calendar, MapPin } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    description: "A three-day music extravaganza featuring top artists",
    date: "Aug 15-17, 2024",
    location: "Central Park, NY",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    description: "The biggest tech conference of the year",
    date: "Sep 5, 2024",
    location: "Convention Center, SF",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Food & Wine Festival",
    description: "Taste the best cuisines from around the world",
    date: "Oct 1-2, 2024",
    location: "Downtown Food Court, LA",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function FeaturedEvents() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

