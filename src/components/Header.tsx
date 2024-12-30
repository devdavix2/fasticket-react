import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';

export function Header() {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/hotels", label: "Hotels" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold">
              Fast<span className="text-primary">icket</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Login and Sign Up Buttons */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="justify-start">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="justify-start">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="my-4" />
                <Link to="/login">
                  <Button variant="ghost" className="justify-start">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="justify-start">Sign Up</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
