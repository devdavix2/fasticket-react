import { Card, CardContent, CardHeader, CardTitle } from "../components/components/ui/card";
import { Input } from "../components/components/ui/input";
import { Label } from "../components/components/ui/label";
import { Button } from "../components/components/ui/button";
import { useState } from "react";
import { loginUser } from "../services/api"; // Ensure the API file path is correct

interface LoginFormData {
  usernameOrEmail: string;
  password: string;
}

export function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    usernameOrEmail: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Form validation
  const validateFormData = (): string | null => {
    const { usernameOrEmail, password } = formData;
    if (!usernameOrEmail.trim()) {
      return "Email or Username is required.";
    }
    if (!password.trim()) {
      return "Password is required.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  // Handle login
  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const validationError = validateFormData();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await loginUser(formData); // Call the API function
      console.log("Login response:", response);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred while logging in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              
              }}
              method="POST"
            >
              <div className="space-y-2">
                <Label htmlFor="usernameOrEmail">Email or Username</Label>
                <Input
                  id="usernameOrEmail"
                  aria-label="Email or Username"
                  placeholder="Your email or username"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  aria-label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">Login successful!</p>}
              <Button className="w-full" type="submit">
                {loading ? "Logging in..." : "Log In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
