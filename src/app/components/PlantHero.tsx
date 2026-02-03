import { motion } from "motion/react";

export type PlantState = "NORMAL" | "STRESS_RISING" | "STRESSED" | "IRRIGATING" | "RECOVERED";

interface PlantHeroProps {
  state: PlantState;
  size?: "small" | "medium" | "large";
}

export function PlantHero({ state, size = "medium" }: PlantHeroProps) {
  const sizeMap = {
    small: 160,
    medium: 220,
    large: 280,
  };
  
  const plantSize = sizeMap[size];
  
  // Animation variants based on plant state
  const getSwayAnimation = () => {
    switch (state) {
      case "NORMAL":
      case "RECOVERED":
        return {
          rotate: [0, 2, -2, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "STRESS_RISING":
        return {
          rotate: [0, 1.5, -1.5, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "STRESSED":
        return {
          rotate: [0, 0.5, -0.5, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "IRRIGATING":
        return {
          rotate: [0, 2.5, -2.5, 0],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      default:
        return {};
    }
  };

  const getLeafOuterColor = () => {
    switch (state) {
      case "NORMAL":
        return "#5A9F5E";
      case "STRESS_RISING":
        return "#7AB34A";
      case "STRESSED":
        return "#8E8E8E";
      case "IRRIGATING":
        return "#4CAF50";
      case "RECOVERED":
        return "#5A9F5E";
      default:
        return "#5A9F5E";
    }
  };

  const getLeafInnerColor = () => {
    switch (state) {
      case "NORMAL":
        return "#A8D5AA";
      case "STRESS_RISING":
        return "#B8D88F";
      case "STRESSED":
        return "#BABABA";
      case "IRRIGATING":
        return "#90E095";
      case "RECOVERED":
        return "#A8D5AA";
      default:
        return "#A8D5AA";
    }
  };

  const getLeafRotation = () => {
    switch (state) {
      case "NORMAL":
      case "RECOVERED":
        return 0;
      case "STRESS_RISING":
        return -8;
      case "STRESSED":
        return -20;
      case "IRRIGATING":
        return 3;
      default:
        return 0;
    }
  };

  const leafOuterColor = getLeafOuterColor();
  const leafInnerColor = getLeafInnerColor();
  const leafRotation = getLeafRotation();

  // Leaf component matching the reference image style
  const Leaf = ({ rotate, translateX, translateY, scale = 1, flipX = false }: { rotate: number; translateX: number; translateY: number; scale?: number; flipX?: boolean }) => (
    <motion.g
      animate={{
        rotate: rotate + leafRotation,
        transition: { duration: 1, ease: "easeOut" },
      }}
      style={{ transformOrigin: "center center" }}
    >
      <g transform={`translate(${translateX}, ${translateY}) scale(${flipX ? -1 : 1}, 1) scale(${scale})`}>
        {/* Outer leaf shape - rounded with pointed tip */}
        <path
          d="M 0,-30 C -12,-28 -18,-18 -18,-5 C -18,8 -10,20 0,28 C 10,20 18,8 18,-5 C 18,-18 12,-28 0,-30 Z"
          fill={leafOuterColor}
        />
        
        {/* Inner lighter area */}
        <path
          d="M 0,-26 C -9,-24 -14,-16 -14,-6 C -14,6 -8,16 0,22 C 8,16 14,6 14,-6 C 14,-16 9,-24 0,-26 Z"
          fill={leafInnerColor}
        />
        
        {/* Center vein */}
        <path
          d="M 0,-26 L 0,22"
          stroke={leafOuterColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        
        {/* Subtle side veins */}
        <path d="M 0,-10 Q -6,-5 -10,2" stroke={leafOuterColor} strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M 0,-10 Q 6,-5 10,2" stroke={leafOuterColor} strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M 0,5 Q -5,8 -8,14" stroke={leafOuterColor} strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M 0,5 Q 5,8 8,14" stroke={leafOuterColor} strokeWidth="0.8" fill="none" opacity="0.3" />
      </g>
    </motion.g>
  );

  return (
    <div className="relative flex items-center justify-center" style={{ width: plantSize, height: plantSize }}>
      <motion.div
        animate={getSwayAnimation()}
        className="relative"
        style={{ transformOrigin: "center bottom" }}
      >
        <svg
          width={plantSize}
          height={plantSize}
          viewBox="0 0 200 240"
          style={{ overflow: "visible" }}
        >
          {/* Ground shadow */}
          <ellipse
            cx="100"
            cy="218"
            rx="50"
            ry="6"
            fill="#B0BEC5"
            opacity="0.3"
          />

          {/* Terracotta pot */}
          <defs>
            <linearGradient id="potGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BC8B6F" />
              <stop offset="50%" stopColor="#D4A88C" />
              <stop offset="100%" stopColor="#BC8B6F" />
            </linearGradient>
          </defs>
          
          {/* Pot body */}
          <path
            d="M 60 175 Q 60 190 65 205 L 135 205 Q 140 190 140 175 Z"
            fill="url(#potGradient)"
            stroke="#A67C5D"
            strokeWidth="2"
          />
          
          {/* Pot rim */}
          <rect
            x="55"
            y="170"
            width="90"
            height="8"
            fill="#D4A88C"
            stroke="#A67C5D"
            strokeWidth="1.5"
            rx="2"
          />
          
          {/* Pot rim top edge highlight */}
          <rect
            x="55"
            y="170"
            width="90"
            height="3"
            fill="#E8C4A8"
            rx="1"
          />

          {/* Soil */}
          <ellipse
            cx="100"
            cy="175"
            rx="40"
            ry="6"
            fill="#6D5E52"
          />
          
          {/* Soil texture */}
          <ellipse
            cx="100"
            cy="174"
            rx="35"
            ry="4"
            fill="#5A4A3F"
            opacity="0.4"
          />

          {/* Main stems coming from soil */}
          <g>
            {/* Left stem */}
            <path
              d="M 90,175 Q 85,150 82,120 Q 80,100 85,75"
              stroke="#6B8E4E"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Center stem */}
            <path
              d="M 100,175 Q 100,140 100,100 Q 100,80 100,60"
              stroke="#6B8E4E"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Right stem */}
            <path
              d="M 110,175 Q 115,150 118,120 Q 120,100 115,75"
              stroke="#6B8E4E"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Leaves arranged naturally */}
          <g>
            {/* Top center leaf */}
            <Leaf rotate={-5} translateX={100} translateY={48} scale={0.95} />
            
            {/* Upper left leaves */}
            <Leaf rotate={-35} translateX={70} translateY={70} scale={1} />
            <Leaf rotate={-50} translateX={60} translateY={95} scale={0.9} />
            
            {/* Upper right leaves */}
            <Leaf rotate={35} translateX={130} translateY={70} scale={1} flipX={true} />
            <Leaf rotate={50} translateX={140} translateY={95} scale={0.9} flipX={true} />
            
            {/* Middle left leaves */}
            <Leaf rotate={-65} translateX={55} translateY={120} scale={1.05} />
            
            {/* Middle right leaves */}
            <Leaf rotate={65} translateX={145} translateY={120} scale={1.05} flipX={true} />
            
            {/* Lower left leaves */}
            <Leaf rotate={-75} translateX={65} translateY={145} scale={0.95} />
            
            {/* Lower right leaves */}
            <Leaf rotate={75} translateX={135} translateY={145} scale={0.95} flipX={true} />
            
            {/* Bottom leaves */}
            <Leaf rotate={-80} translateX={75} translateY={165} scale={0.85} />
            <Leaf rotate={80} translateX={125} translateY={165} scale={0.85} flipX={true} />
          </g>
        </svg>

        {/* Irrigating water droplets falling ON and DOWN leaves */}
        {state === "IRRIGATING" && (
          <div className="absolute inset-0">
            {/* Water droplets on different leaves */}
            {[
              { left: "50%", top: "15%", delay: 0 },
              { left: "25%", top: "25%", delay: 0.2 },
              { left: "75%", top: "25%", delay: 0.4 },
              { left: "20%", top: "38%", delay: 0.6 },
              { left: "80%", top: "38%", delay: 0.8 },
              { left: "18%", top: "50%", delay: 0.3 },
              { left: "82%", top: "50%", delay: 0.5 },
              { left: "28%", top: "62%", delay: 0.7 },
              { left: "72%", top: "62%", delay: 0.9 },
              { left: "35%", top: "70%", delay: 0.4 },
              { left: "65%", top: "70%", delay: 0.1 },
            ].map((droplet, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: droplet.left,
                  top: droplet.top,
                }}
                animate={{
                  y: [0, plantSize * 0.15, plantSize * 0.3, plantSize * 0.5, plantSize * 0.85],
                  x: [0, Math.sin(i) * 3, Math.sin(i) * 5, Math.sin(i) * 3, 0],
                  opacity: [0, 1, 1, 0.8, 0],
                  scale: [0.5, 1, 1, 0.9, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: droplet.delay,
                  ease: "easeIn",
                }}
              >
                <div
                  className="rounded-full"
                  style={{
                    width: plantSize * 0.03,
                    height: plantSize * 0.04,
                    background: "linear-gradient(135deg, #81D4FA 0%, #4FC3F7 100%)",
                    boxShadow: "0 2px 4px rgba(79, 195, 247, 0.6), inset -1px -1px 2px rgba(255,255,255,0.5)",
                    borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Recovered sparkles */}
        {state === "RECOVERED" && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-xl"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${12 + (i % 3) * 18}%`,
                }}
                animate={{
                  scale: [0, 1.3, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 1.5,
                  repeat: 3,
                  delay: i * 0.15,
                }}
              >
                ✨
              </motion.div>
            ))}
          </>
        )}
      </motion.div>
    </div>
  );
}
