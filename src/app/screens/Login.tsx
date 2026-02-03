import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import { PlantHero } from "@/app/components/PlantHero";
import { useTheme } from "@/app/contexts/ThemeContext";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { darkMode } = useTheme();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]"} flex items-center justify-center p-4`}>
      <div className={`max-w-md w-full ${darkMode ? "bg-[#2A2A2A]" : "bg-white"} rounded-xl shadow-lg p-8 space-y-6`}>
        <div className="flex justify-center">
          <PlantHero state="NORMAL" size="small" />
        </div>

        <div className="text-center space-y-2">
          <h1 className={`text-3xl font-bold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>Welcome Back!</h1>
          <p className={darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}>Sign in to monitor your plants</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-lg ${darkMode ? "bg-[#3A3A3A] border-[#4A4A4A] text-white" : "border-[#C5E1A5]"} focus:border-[#66BB6A]`}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`rounded-lg ${darkMode ? "bg-[#3A3A3A] border-[#4A4A4A] text-white" : "border-[#C5E1A5]"} focus:border-[#66BB6A]`}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} cursor-pointer`}>
                Remember me
              </Label>
            </div>
            <button type="button" className={`text-sm ${darkMode ? "text-[#66BB6A] hover:text-[#558B2F]" : "text-[#66BB6A] hover:text-[#558B2F]"}`}>
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#66BB6A] hover:bg-[#558B2F] text-white rounded-lg py-6"
          >
            Login
          </Button>
        </form>

        <div className={`text-center text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className={`${darkMode ? "text-[#66BB6A] hover:text-[#558B2F]" : "text-[#66BB6A] hover:text-[#558B2F]"} font-medium`}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
