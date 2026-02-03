import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import { PlantHero } from "@/app/components/PlantHero";
import { useTheme } from "@/app/contexts/ThemeContext";

export function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { darkMode } = useTheme();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Mock registration - navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]"} flex items-center justify-center p-4`}>
      <div className={`max-w-md w-full ${darkMode ? "bg-[#2A2A2A]" : "bg-white"} rounded-xl shadow-lg p-8 space-y-6`}>
        <div className="flex justify-center">
          <PlantHero state="NORMAL" size="small" />
        </div>

        <div className="text-center space-y-2">
          <h1 className={`text-3xl font-bold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>Create Your STOMA Account</h1>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`rounded-lg ${darkMode ? "bg-[#3A3A3A] border-[#4A4A4A] text-white" : "border-[#C5E1A5]"} focus:border-[#66BB6A]`}
              required
            />
          </div>

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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`rounded-lg ${darkMode ? "bg-[#3A3A3A] border-[#4A4A4A] text-white" : "border-[#C5E1A5]"} focus:border-[#66BB6A]`}
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreeToTerms}
              onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
              required
            />
            <Label htmlFor="terms" className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} cursor-pointer leading-tight`}>
              I agree to the Terms & Conditions and Privacy Policy
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#66BB6A] hover:bg-[#558B2F] text-white rounded-lg py-6"
            disabled={!agreeToTerms}
          >
            Register
          </Button>
        </form>

        <div className={`text-center text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className={`${darkMode ? "text-[#66BB6A] hover:text-[#558B2F]" : "text-[#66BB6A] hover:text-[#558B2F]"} font-medium`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
