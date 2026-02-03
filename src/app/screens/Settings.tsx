import { useState } from "react";
import { Header } from "@/app/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import { Badge } from "@/app/components/ui/badge";
import { Settings as SettingsIcon } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";

export function Settings() {
  const { darkMode } = useTheme();
  const handleCalibration = () => {
    alert("Starting sensor calibration...");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]"}`}>
      <Header title="Manual Control & Settings" showBackButton={true} />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Sensor Calibration */}
        <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
          <CardHeader>
            <CardTitle className={`${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} flex items-center gap-2`}>
              <SettingsIcon className="w-5 h-5" />
              Sensor Calibration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>
              Calibrate sensors to ensure accurate readings. This process takes approximately 5 minutes.
            </p>

            <div className="space-y-2">
              <div className={`flex justify-between items-center p-3 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg`}>
                <span className={`text-sm ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>Leaf Temperature Sensor</span>
                <Badge className="bg-[#66BB6A]">Calibrated</Badge>
              </div>
              <div className={`flex justify-between items-center p-3 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg`}>
                <span className={`text-sm ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>Air Temperature Sensor</span>
                <Badge className="bg-[#66BB6A]">Calibrated</Badge>
              </div>
              <div className={`flex justify-between items-center p-3 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg`}>
                <span className={`text-sm ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>Soil Moisture Sensor</span>
                <Badge className="bg-[#66BB6A]">Calibrated</Badge>
              </div>
            </div>

            <Button
              onClick={handleCalibration}
              variant="outline"
              className={`w-full ${darkMode ? "border-[#66BB6A] text-[#66BB6A] hover:bg-[#3A3A3A]" : "border-[#66BB6A] text-[#66BB6A] hover:bg-[#E8F5E9]"}`}
            >
              Recalibrate All Sensors
            </Button>

            <p className={`text-xs ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>
              Last calibration: January 28, 2026
            </p>
          </CardContent>
        </Card>

        {/* Threshold Settings */}
        <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
          <CardHeader>
            <CardTitle className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}> Advanced Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>PSI Irrigation Threshold</Label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0.5"
                  max="1.0"
                  step="0.05"
                  defaultValue="0.7"
                  className="flex-1"
                />
                <span className={`${darkMode ? "text-[#66BB6A]" : "text-[#66BB6A]"} font-semibold min-w-12`}>0.70</span>
              </div>
              <p className={`text-xs ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>
                Irrigation will trigger when PSI exceeds this value
              </p>
            </div>

            <div className="space-y-2">
              <Label className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}> Irrigation Duration (minutes)</Label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  defaultValue="15"
                  className="flex-1"
                />
                <span className={`${darkMode ? "text-[#66BB6A]" : "text-[#66BB6A]"} font-semibold min-w-12`}>15</span>
              </div>
            </div>

            <Button className="w-full bg-[#66BB6A] hover:bg-[#558B2F] text-white">
              Save Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
