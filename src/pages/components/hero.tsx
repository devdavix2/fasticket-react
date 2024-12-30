import { Button } from "./components/ui/button"

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center rounded-lg overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Fasticket
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover events happening around you and purchase tickets with ease
        </p>
        <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
          Get Started
        </Button>
      </div>
    </div>
  )
}

