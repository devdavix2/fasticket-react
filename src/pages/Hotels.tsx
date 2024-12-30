import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { MapPin, Star, Wifi } from 'lucide-react'

const hotels = [
  {
    id: 1,
    name: "Luxury Grand Hotel",
    description: "Experience unparalleled luxury in the heart of the city",
    location: "Downtown, New York",
    rating: 5,
    amenities: ["Free Wi-Fi", "Spa", "Fitness Center", "Pool"],
    price: "$299",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Seaside Resort",
    description: "Relax and unwind with stunning ocean views",
    location: "Beachfront, Miami",
    rating: 4,
    amenities: ["Free Wi-Fi", "Private Beach", "Restaurant", "Pool"],
    price: "$199",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Mountain Lodge",
    description: "Cozy retreat nestled in the mountains",
    location: "Rocky Mountains, Colorado",
    rating: 4,
    amenities: ["Free Wi-Fi", "Fireplace", "Hiking Trails", "Ski Storage"],
    price: "$149",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    name: "City Center Suites",
    description: "Modern suites perfect for business travelers",
    location: "Financial District, San Francisco",
    rating: 4,
    amenities: ["Free Wi-Fi", "Business Center", "Gym", "Room Service"],
    price: "$229",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    name: "Historic Inn",
    description: "Charming inn with a rich history and modern comforts",
    location: "Old Town, Boston",
    rating: 4,
    amenities: ["Free Wi-Fi", "Garden", "Library", "Afternoon Tea"],
    price: "$179",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    name: "Desert Oasis Resort",
    description: "Luxurious resort amid the beauty of the desert",
    location: "Palm Springs, California",
    rating: 5,
    amenities: ["Free Wi-Fi", "Golf Course", "Spa", "Multiple Pools"],
    price: "$249",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function Hotels() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Featured Hotels</h1>
        <p className="text-xl text-gray-600">Find the perfect place to stay for your next trip or event.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{hotel.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{hotel.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(hotel.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.map((amenity) => (
                  <span key={amenity} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {amenity === "Free Wi-Fi" ? <Wifi className="w-3 h-3 inline mr-1" /> : null}
                    {amenity}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-lg font-bold">{hotel.price}<span className="text-sm font-normal">/night</span></span>
              <Button>Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

