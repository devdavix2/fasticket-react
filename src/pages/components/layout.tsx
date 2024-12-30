import { Header } from "./header"
import { Footer } from "./footer"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">{children}</main>
      <Footer />
    </div>
  )
}

