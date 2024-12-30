import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

export function Signup() {
  const handleSignUp = () => {
    // Placeholder for sign-up logic
    console.log("Sign-up functionality goes here.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-8 w-full max-w-md px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
          <p className="text-xl text-gray-600">Create an account to get started.</p>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="john@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Create a password" type="password" />
              </div>
              <Button className="w-full" type="submit">Sign Up</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
