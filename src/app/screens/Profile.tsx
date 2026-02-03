import { useState } from "react";
import { Header } from "@/app/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import { User, LogOut, Moon } from "lucide-react";
import { PlantHero } from "@/app/components/PlantHero";
import { useTheme } from "@/app/contexts/ThemeContext";

export function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const { darkMode, setDarkMode } = useTheme();

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      window.location.href = "/";
    }
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]"}`}>
      <div className={darkMode ? "dark-mode" : ""}>
        <Header title="Profile & Settings" showBackButton={true} />

        <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
          {/* Profile Header */}
          <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4">
                <div className={`w-24 h-24 ${darkMode ? "bg-gradient-to-br from-[#66BB6A] to-[#4A8A4E]" : "bg-gradient-to-br from-[#66BB6A] to-[#558B2F]"} rounded-full flex items-center justify-center`}>
                  <User className="w-12 h-12 text-white" />
                </div>
                <div className="text-center">
                  <h2 className={`text-2xl font-bold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>{name}</h2>
                  <p className={darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}>{email}</p>
                </div>
                <div className="flex justify-center">
                  <PlantHero state="NORMAL" size="small" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Information */}
          <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
            <CardHeader>
              <CardTitle className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className={darkMode ? "text-[#A0A0A0]" : "text-[#2E7D32]"}>Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`rounded-lg ${darkMode ? "bg-[#3A3A3A] border-[#4A4A4A] text-white" : "border-[#C5E1A5]"} focus:border-[#66BB6A]`}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className={darkMode ? "text-[#A0A0A0]" : "text-[#2E7D32]"}>Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`rounded-lg ${darkMode ? "bg-[#3A3A3A] border-[#4A4A4A] text-white" : "border-[#C5E1A5]"} focus:border-[#66BB6A]`}
                />
              </div>

              <Button
                onClick={handleSave}
                className="w-full bg-[#66BB6A] hover:bg-[#558B2F] text-white"
              >
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
            <CardHeader>
              <CardTitle className={`${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} flex items-center gap-2`}>
                <Moon className="w-5 h-5" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`flex items-center justify-between p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg`}>
                <div className="space-y-1">
                  <Label htmlFor="darkMode" className={`${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} font-medium`}>
                    Dark Mode
                  </Label>
                  <p className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>
                    Use dark color scheme for profile
                  </p>
                </div>
                <Switch
                  id="darkMode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
            <CardHeader>
              <CardTitle className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>Your Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg text-center`}>
                  <div className="text-3xl font-bold text-[#66BB6A]">47</div>
                  <p className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} mt-1`}>Days Active</p>
                </div>
                <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg text-center`}>
                  <div className="text-3xl font-bold text-[#66BB6A]">324 L</div>
                  <p className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} mt-1`}>Water Saved</p>
                </div>
                <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg text-center`}>
                  <div className="text-3xl font-bold text-[#66BB6A]">156</div>
                  <p className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} mt-1`}>Irrigations</p>
                </div>
                <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg text-center`}>
                  <div className="text-3xl font-bold text-[#66BB6A]">98%</div>
                  <p className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} mt-1`}>Plant Health</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
            <CardHeader>
              <CardTitle className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>Account Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className={`w-full ${darkMode ? "border-[#66BB6A] text-[#66BB6A] hover:bg-[#3A3A3A]" : "border-[#66BB6A] text-[#66BB6A] hover:bg-[#E8F5E9]"}`}
              >
                Change Password
              </Button>
              <Button
                variant="outline"
                className={`w-full ${darkMode ? "border-[#66BB6A] text-[#66BB6A] hover:bg-[#3A3A3A]" : "border-[#689F38] text-[#689F38] hover:bg-[#F1F8E9]"}`}
              >
                Download Data
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className={`w-full ${darkMode ? "border-[#EF5350] text-[#EF5350] hover:bg-[#3A3A3A]" : "border-[#EF5350] text-[#EF5350] hover:bg-[#FFEBEE]"}`}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </CardContent>
          </Card>

          {/* App Info */}
          <div className="text-center space-y-2 py-4">
            <p className={`text-sm ${darkMode ? "text-[#66BB6A]" : "text-[#689F38]"}`}>STOMA v1.0.0</p>
            <p className={`text-xs ${darkMode ? "text-[#808080]" : "text-[#9E9E9E]"}`}>Plant-state driven irrigation monitoring</p>
            <div className={`flex justify-center gap-4 text-xs ${darkMode ? "text-[#66BB6A]" : "text-[#66BB6A]"}`}>
              <button className="hover:underline">Privacy Policy</button>
              <span>•</span>
              <button className="hover:underline">Terms of Service</button>
              <span>•</span>
              <button className="hover:underline">Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
