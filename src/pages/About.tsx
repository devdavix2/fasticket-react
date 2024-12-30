import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function About() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">About Fasticket</h1>
        <p className="text-xl text-gray-600">
          Fasticket is your one-stop destination for discovering and booking event tickets. Whether you're looking for concerts, festivals, conferences, or other exciting events, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our mission is to provide a seamless platform for discovering and booking tickets for the best events, making your experience easy, fast, and enjoyable.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We aim to be the leading platform where everyone can find and attend exciting events, connecting people through unforgettable experiences.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              At Fasticket, we value convenience, accessibility, and customer satisfaction. We strive to make ticket booking an easy and enjoyable process for all.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
