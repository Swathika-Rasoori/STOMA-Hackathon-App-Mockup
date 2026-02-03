import { useNavigate, useLocation } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Leaf, Info, BarChart3, Settings, User } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showInfoAndAnalytics?: boolean;
}

export function Header({ title, showBackButton = false, showInfoAndAnalytics = true }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useTheme();
  
  // Don't show info and analytics on Login/Register pages
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/";

  return (
    <div className={`${darkMode ? "bg-[#2A2A2A] border-[#3A3A3A]" : "bg-white border-[#E8F5E9]"} shadow-sm border-b`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
            className={`${darkMode ? "text-[#66BB6A] hover:text-[#7ECDC9]" : "text-[#66BB6A] hover:text-[#558B2F]"} cursor-pointer`}
            title="Go to Dashboard"
          >
            <Leaf className="w-8 h-8" />
          </Button>
          <h1 className={`text-2xl font-bold ${darkMode ? "text-[#66BB6A]" : "text-[#2E7D32]"}`}>{title}</h1>
        </div>
        
        {!isAuthPage && showInfoAndAnalytics && (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/about")}
              className={`${darkMode ? "text-[#66BB6A] hover:text-[#7ECDC9]" : "text-[#66BB6A] hover:text-[#558B2F]"}`}
              title="About"
            >
              <Info className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/plant-detail")}
              className={`${darkMode ? "text-[#66BB6A] hover:text-[#7ECDC9]" : "text-[#66BB6A] hover:text-[#558B2F]"}`}
              title="Plant Detail Analysis"
            >
              <BarChart3 className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/settings")}
              className={`${darkMode ? "text-[#66BB6A] hover:text-[#7ECDC9]" : "text-[#66BB6A] hover:text-[#558B2F]"}`}
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
              className={`${darkMode ? "text-[#66BB6A] hover:text-[#7ECDC9]" : "text-[#66BB6A] hover:text-[#558B2F]"}`}
              title="Profile"
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}