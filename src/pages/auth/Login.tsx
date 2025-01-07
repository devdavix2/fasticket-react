import { Card, CardContent, CardHeader, CardTitle } from "../components/components/ui/card";
import { Input } from "../components/components/ui/input";
import { Label } from "../components/components/ui/label";
import { Button } from "../components/components/ui/button";
import { useState } from "react";
import { loginUser } from "../services/api";

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
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Validate form data
  const validateFormData = (): string | null => {
    const { usernameOrEmail, password } = formData;

    if (!usernameOrEmail.trim()) return "Email or Username is required.";
    if (!password.trim()) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters long.";

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
      const response = await loginUser(formData);
      console.log("Login response:", response);

      // Check response for success
      if (response?.status === 200) {
        setSuccess(true);
        setError(null);
      } else {
        throw new Error(response?.message || "Login failed.");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while logging in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Login</h1>
          <p className="text-gray-600">Welcome back! Please log in to continue.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Login to Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="usernameOrEmail">Email or Username</Label>
                <Input
                  id="usernameOrEmail"
                  placeholder="Your email or username"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  disabled={loading}
                  aria-label="Username or Email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  aria-label="Password"
                />
              </div>

              {/* Display error messages */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Display success message */}
              {success && <p className="text-green-500 text-sm">Login successful!</p>}

              {/* Submit button */}
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
