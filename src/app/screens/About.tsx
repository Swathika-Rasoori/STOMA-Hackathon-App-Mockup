import { Header } from "@/app/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Lightbulb } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";

export function About() {
  const { darkMode } = useTheme();
  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]"}`}>
      <Header title="About STOMA" showBackButton={true} />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Hero Section */}
        <Card className={`${darkMode ? "bg-gradient-to-br from-[#3A3A3A] to-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9] bg-gradient-to-br from-[#E8F5E9] to-white"} shadow-md`}>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#66BB6A] rounded-full">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className={`text-2xl font-bold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} mb-2`}>Why did STOMA decide this?</h2>
                <p className={darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}>
                  Understanding how STOMA makes intelligent irrigation decisions based on plant state, 
                  sensor data, and environmental conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Explanation Cards */}
        <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
          <CardHeader>
            <CardTitle className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>How STOMA Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg border ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
              <h3 className={`font-semibold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} mb-2`}>🌡️ Temperature Analysis</h3>
              <p className={darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}>
                STOMA continuously monitors both <span className="font-semibold text-[#66BB6A]">leaf temperature</span> and{" "}
                <span className="font-semibold text-[#66BB6A]">air temperature</span>. When the leaf temperature is higher 
                than the air temperature, it indicates that the plant is experiencing water stress. The stomata (tiny pores on 
                leaves) begin to close to conserve water, which reduces transpiration cooling and causes the leaf temperature to rise.
              </p>
            </div>

            <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg border ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
              <h3 className={`font-semibold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} mb-2`}>📊 PSI Calculation</h3>
              <p className={darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}>
                The Plant Stress Index (PSI) is calculated using the formula:{" "}
                <span className={`font-mono ${darkMode ? "text-[#66BB6A]" : "text-[#558B2F]"} font-semibold`}>(Leaf Temp - Air Temp) / 2.5</span>
                <br /><br />
                For example, if the leaf temperature is 26.5°C and the air temperature is 24.8°C:
                <br />
                PSI = (26.5 - 24.8) / 2.5 = <span className="font-semibold text-[#66BB6A]">0.68</span>
                <br /><br />
                This normalized value helps STOMA make consistent decisions across different environmental conditions.
              </p>
            </div>

            <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg border ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
              <h3 className={`font-semibold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} mb-2`}>🎯 Decision Thresholds</h3>
              <p className={darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}>
                STOMA uses intelligent thresholds to determine when to irrigate:
              </p>
              <ul className={`list-disc list-inside ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} mt-2 space-y-1 ml-4`}>
                <li><span className="font-semibold text-[#66BB6A]">PSI {"<"} 0.5:</span> Plant is healthy (NORMAL state)</li>
                <li><span className="font-semibold text-[#FFA726]">PSI 0.5 - 0.7:</span> Stress is rising (STRESS_RISING state)</li>
                <li><span className="font-semibold text-[#EF5350]">PSI {">"} 0.7:</span> Critical threshold - irrigation triggered (STRESSED → IRRIGATING)</li>
              </ul>
            </div>

            <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg border ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
              <h3 className={`font-semibold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} mb-2`}>🔍 Sensor Reliability</h3>
              <p className={darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}>
                STOMA continuously monitors sensor health and trust levels. Each sensor (leaf, air, and soil) is evaluated for:
              </p>
              <ul className={`list-disc list-inside ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} mt-2 space-y-1 ml-4`}>
                <li>Reading consistency and stability</li>
                <li>Response time and accuracy</li>
                <li>Historical performance patterns</li>
              </ul>
              <p className={`${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} mt-2`}>
                When sensor trust levels are above 85%, STOMA can make confident irrigation decisions. 
                If trust levels drop, the system switches to a more conservative offline decision mode.
              </p>
            </div>

            <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg border ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
              <h3 className={`font-semibold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} mb-2`}>📡 Offline Decision Logic</h3>
              <p className={darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}>
                When connectivity is lost or sensor data becomes unreliable, STOMA doesn't just stop working. 
                It switches to offline decision mode, which uses:
              </p>
              <ul className="list-disc list-inside text-[#689F38] mt-2 space-y-1 ml-4">
                <li>Historical irrigation patterns from the past 7 days</li>
                <li>Time-of-day stress predictions</li>
                <li>Last known sensor readings with confidence intervals</li>
                <li>Conservative safety thresholds to prevent over-irrigation</li>
              </ul>
              <p className={`${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} mt-2`}>
                When connectivity is restored, you can use the <span className="font-semibold text-[#66BB6A]">"Sync Now"</span> button 
                to synchronize offline decisions with the cloud and review what happened during the offline period.
              </p>
            </div>

            <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg border ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
              <h3 className={`font-semibold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} mb-2`}>🌱 Learning from History</h3>
              <p className={darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}>
                STOMA learns your plant's unique stress patterns over time. Based on historical data:
              </p>
              <ul className={`list-disc list-inside ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"} mt-2 space-y-1 ml-4`}>
                <li>Identifies daily stress patterns (e.g., typically stressed 11 AM - 3 PM)</li>
                <li>Optimizes irrigation timing to prevent stress before it becomes critical</li>
                <li>Adapts to seasonal changes and weather patterns</li>
                <li>Reduces water waste by predicting exactly when irrigation is needed</li>
              </ul>
            </div>

            <div className={`p-4 ${darkMode ? "bg-gradient-to-r from-[#66BB6A] to-[#558B2F]" : "bg-gradient-to-r from-[#66BB6A] to-[#558B2F]"} rounded-lg text-white`}>
              <h3 className="font-semibold mb-2">✨ The Result</h3>
              <p>
                By combining real-time sensor data, intelligent thresholds, offline resilience, and historical learning, 
                STOMA ensures your plants get exactly the water they need, when they need it - saving water, reducing stress, 
                and promoting healthy plant growth.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
