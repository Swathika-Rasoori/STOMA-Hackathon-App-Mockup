import { useNavigate } from "react-router";
import { PlantHero } from "@/app/components/PlantHero";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";

export function Splash() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]" : "bg-gradient-to-b from-[#F1F8E9] to-[#DCEDC8]"} flex flex-col items-center justify-center p-8`}>
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <PlantHero state="NORMAL" size="large" />
        </div>
        
        <div className="space-y-3">
          <h1 className={`text-6xl font-bold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`} style={{ fontFamily: 'Inter, sans-serif' }}>
            STOMA
          </h1>
          <p className={`text-xl ${darkMode ? "text-[#A0A0A0]" : "text-[#558B2F]"}`}>
            Plant-state driven irrigation monitoring
          </p>
        </div>

        <Button
          onClick={() => navigate("/login")}
          className="w-full bg-[#66BB6A] hover:bg-[#558B2F] text-white rounded-xl py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className={`text-sm ${darkMode ? "text-[#66BB6A]" : "text-[#689F38]"} mt-6`}>
          Offline-first smart irrigation
        </p>
      </div>
    </div>
  );
}
