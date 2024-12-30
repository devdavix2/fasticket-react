import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

export function Login() {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    // Placeholder for login logic
    console.log("Login functionality goes here.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-8 w-full max-w-md px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <p className="text-xl text-gray-600">Welcome back! Please log in to continue.</p>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="john@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Enter your password" type="password" />
              </div>
              <Button className="w-full" type="submit">Log In</Button>
            </form>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
