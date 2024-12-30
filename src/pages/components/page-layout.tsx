import { Layout } from "./layout"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {description && <p className="text-xl text-gray-600 mb-8">{description}</p>}
        </div>
      </div>
      <div className="container max-w-6xl mx-auto px-4 py-12">{children}</div>
    </Layout>
  )
}

