import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
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
  {
    id: 4,
    title: "International Film Festival",
    description: "Showcasing the best of world cinema",
    date: "Nov 10-20, 2024",
    location: "Various Theaters, Toronto",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Winter Wonderland Fair",
    description: "A magical winter fair for all ages",
    date: "Dec 15-31, 2024",
    location: "City Square, Chicago",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "New Year's Eve Spectacular",
    description: "Ring in the new year with an unforgettable celebration",
    date: "Dec 31, 2024",
    location: "Times Square, NY",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function Events() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-xl text-gray-600">Discover and book tickets for the hottest events in your area.</p>
      </div>
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
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{event.description}</p>
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
              <Button className="w-full">Book Tickets</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

