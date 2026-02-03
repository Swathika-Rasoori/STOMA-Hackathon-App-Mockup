import { Header } from "@/app/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from "recharts";
import { TrendingUp, Leaf, Wind, Mountain, Clock } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";

export function PlantDetail() {
  const { darkMode } = useTheme();
  // Mock data for stress trend
  const stressData = [
    { time: "00:00", psi: 0.2 },
    { time: "04:00", psi: 0.3 },
    { time: "08:00", psi: 0.5 },
    { time: "12:00", psi: 0.7 },
    { time: "16:00", psi: 0.6 },
    { time: "20:00", psi: 0.4 },
  ];

  // Mock detailed PSI data
  const psiData = [
    { time: "00:00", leafTemp: 22, airTemp: 20, psi: 0.2 },
    { time: "04:00", leafTemp: 21, airTemp: 19, psi: 0.3 },
    { time: "08:00", leafTemp: 24, airTemp: 22, psi: 0.5 },
    { time: "12:00", leafTemp: 28, airTemp: 26, psi: 0.7 },
    { time: "16:00", leafTemp: 27, airTemp: 25, psi: 0.6 },
    { time: "20:00", leafTemp: 23, airTemp: 21, psi: 0.4 },
  ];

  const decisionLog = [
    { time: "14:32", event: "Irrigation Started", reason: "PSI threshold exceeded (0.75)" },
    { time: "12:15", event: "Stress Rising Detected", reason: "Leaf temp 2°C above air temp" },
    { time: "09:00", event: "System Online", reason: "Daily check completed" },
    { time: "Yesterday", event: "Irrigation Completed", reason: "PSI returned to 0.3" },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]"}`}>
      <Header title="Plant Detail Analysis" showBackButton={true} />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Stress Trend Chart - MOVED FROM DASHBOARD */}
        <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
          <CardHeader>
            <CardTitle className={`${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} flex items-center gap-2`}>
              <TrendingUp className="w-5 h-5" />
              Stress Trend Chart
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={stressData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#3A3A3A" : "#E8F5E9"} />
                <XAxis dataKey="time" stroke={darkMode ? "#A0A0A0" : "#689F38"} />
                <YAxis stroke={darkMode ? "#A0A0A0" : "#689F38"} domain={[0, 1]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: darkMode ? "#3A3A3A" : "#F1F8E9", border: `1px solid ${darkMode ? "#4A4A4A" : "#C5E1A5"}` }}
                />
                <ReferenceLine y={0.7} stroke="#EF5350" strokeDasharray="3 3" label="Threshold" />
                <Line type="monotone" dataKey="psi" stroke="#66BB6A" strokeWidth={3} dot={{ fill: "#66BB6A", r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* PSI Over Time Graph */}
        <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
          <CardHeader>
            <CardTitle className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}> PSI Over Time (24 Hours)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={psiData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#3A3A3A" : "#E8F5E9"} />
                <XAxis dataKey="time" stroke={darkMode ? "#A0A0A0" : "#689F38"} />
                <YAxis stroke={darkMode ? "#A0A0A0" : "#689F38"} domain={[0, 1]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: darkMode ? "#3A3A3A" : "#F1F8E9", border: `1px solid ${darkMode ? "#4A4A4A" : "#C5E1A5"}` }}
                />
                <Legend />
                <ReferenceLine y={0.7} stroke="#EF5350" strokeDasharray="3 3" label="Critical" />
                <ReferenceLine y={0.5} stroke="#FFA726" strokeDasharray="3 3" label="Warning" />
                <Line type="monotone" dataKey="psi" name="PSI" stroke="#66BB6A" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Temperature Comparison Graph */}
        <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
          <CardHeader>
            <CardTitle className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}> Temperature Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={psiData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#3A3A3A" : "#E8F5E9"} />
                <XAxis dataKey="time" stroke={darkMode ? "#A0A0A0" : "#689F38"} />
                <YAxis stroke={darkMode ? "#A0A0A0" : "#689F38"} label={{ value: '°C', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: darkMode ? "#3A3A3A" : "#F1F8E9", border: `1px solid ${darkMode ? "#4A4A4A" : "#C5E1A5"}` }}
                />
                <Legend />
                <Line type="monotone" dataKey="leafTemp" name="Leaf Temp" stroke="#EF5350" strokeWidth={2} />
                <Line type="monotone" dataKey="airTemp" name="Air Temp" stroke="#42A5F5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Decision Log - MOVED FROM DASHBOARD */}
        <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
          <CardHeader>
            <CardTitle className={`${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"} flex items-center gap-2`}>
              <Clock className="w-5 h-5" />
              Decision Log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {decisionLog.map((log, index) => (
                <div key={index} className={`flex gap-4 p-3 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg`}>
                  <div className={`text-sm font-medium ${darkMode ? "text-[#66BB6A]" : "text-[#558B2F]"} min-w-20`}>{log.time}</div>
                  <div className="flex-1">
                    <div className={`font-medium ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>{log.event}</div>
                    <div className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>{log.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sensor Details - MOVED FROM DASHBOARD */}
        <Card className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "border-[#E8F5E9]"} shadow-md`}>
          <CardHeader>
            <CardTitle className={darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}>Sensor Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Leaf Sensor */}
              <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg border ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#66BB6A] rounded-full">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>Leaf Sensor</h3>
                    <p className={`text-xs ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>Last update: 2 min ago</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>Trust Level</span>
                    <span className="text-2xl font-bold text-[#66BB6A]">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                  <Badge className={`${darkMode ? "bg-[#4A4A4A] text-[#66BB6A] hover:bg-[#5A5A5A]" : "bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#C5E1A5]"}`}>Healthy</Badge>
                  <div className={`mt-3 pt-3 border-t ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
                    <p className={`text-xs ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>
                      <span className="font-semibold">Status:</span> Operating normally
                      <br />
                      <span className="font-semibold">Reading:</span> 26.5°C
                    </p>
                  </div>
                </div>
              </div>

              {/* Air Sensor */}
              <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg border ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#66BB6A] rounded-full">
                    <Wind className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>Air Sensor</h3>
                    <p className={`text-xs ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>Last update: 1 min ago</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>Trust Level</span>
                    <span className="text-2xl font-bold text-[#66BB6A]">89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                  <Badge className={`${darkMode ? "bg-[#4A4A4A] text-[#66BB6A] hover:bg-[#5A5A5A]" : "bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#C5E1A5]"}`}>Healthy</Badge>
                  <div className={`mt-3 pt-3 border-t ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
                    <p className={`text-xs ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>
                      <span className="font-semibold">Status:</span> Operating normally
                      <br />
                      <span className="font-semibold">Reading:</span> 24.8°C
                    </p>
                  </div>
                </div>
              </div>

              {/* Soil Sensor */}
              <div className={`p-4 ${darkMode ? "bg-[#3A3A3A]" : "bg-[#F1F8E9]"} rounded-lg border ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#66BB6A] rounded-full">
                    <Mountain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>Soil Sensor</h3>
                    <p className={`text-xs ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>Last update: 3 min ago</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>Trust Level</span>
                    <span className="text-2xl font-bold text-[#66BB6A]">91%</span>
                  </div>
                  <Progress value={91} className="h-2" />
                  <Badge className={`${darkMode ? "bg-[#4A4A4A] text-[#66BB6A] hover:bg-[#5A5A5A]" : "bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#C5E1A5]"}`}>Healthy</Badge>
                  <div className={`mt-3 pt-3 border-t ${darkMode ? "border-[#4A4A4A]" : "border-[#C5E1A5]"}`}>
                    <p className={`text-xs ${darkMode ? "text-[#A0A0A0]" : "text-[#689F38]"}`}>
                      <span className="font-semibold">Status:</span> Operating normally
                      <br />
                      <span className="font-semibold">Reading:</span> 45% moisture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
