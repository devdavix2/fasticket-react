import { Card, CardContent, CardHeader, CardTitle } from "../components/components/ui/card";
import { Input } from "../components/components/ui/input";
import { Label } from "../components/components/ui/label";
import { Button } from "../components/components/ui/button";
import { useState, useEffect } from "react";
import { signupUser } from "../services/api";

export const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    company: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (error || success) {
      timeout = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 3000); // Dismiss after 3 seconds
    }

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [error, success]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await signupUser(formData);
      console.log("Registration successful:", response);
      setSuccess("Registration Successful!");
    } catch (err: any) {
      setError(err.message || "Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen relative px-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Signing up..." : "Sign Up"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Success Modal */}
      {success && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out">
          {success}
        </div>
      )}

      {/* Error Modal */}
      {error && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out">
          {error}
        </div>
      )}
    </div>
  );
};
