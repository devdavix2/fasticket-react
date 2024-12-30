import { Card, CardContent } from "./components/ui/card"
import { Music, Theater, Utensils, Gamepad, Mic2, Film } from 'lucide-react'

const categories = [
  {
    icon: <Music className="h-8 w-8" />,
    name: "Concerts",
    count: "250+ Events",
  },
  {
    icon: <Theater className="h-8 w-8" />,
    name: "Theater",
    count: "100+ Shows",
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    name: "Food & Drink",
    count: "150+ Events",
  },
  {
    icon: <Gamepad className="h-8 w-8" />,
    name: "Gaming",
    count: "80+ Events",
  },
  {
    icon: <Mic2 className="h-8 w-8" />,
    name: "Comedy",
    count: "120+ Shows",
  },
  {
    icon: <Film className="h-8 w-8" />,
    name: "Cinema",
    count: "200+ Screenings",
  },
]

export function Categories() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Card key={category.name} className="hover:border-primary transition-colors cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="mb-4 text-primary">{category.icon}</div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

