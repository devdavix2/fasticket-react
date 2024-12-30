import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Calendar } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "How to Maximize Your Event Experience",
    description: "Tips and tricks to make the most out of every event you attend.",
    date: "July 10, 2024",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Top 5 Must-Attend Festivals This Year",
    description: "Discover the best festivals happening around the world this year.",
    date: "June 15, 2024",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "The Future of Event Ticketing",
    description: "How technology is revolutionizing the way we book and experience events.",
    date: "May 20, 2024",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function Blog() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
