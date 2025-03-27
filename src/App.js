import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function ComingSoon() {
  const [glow, setGlow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="play-now">
        Play<span>Now</span>
      </div>
      <motion.h1
        className="coming-soon-title"
        animate={{ textShadow: `0px 0px ${glow / 5}px white` }}
        transition={{ duration: 0.1, repeat: Infinity }}
      >
        COMING&nbsp;&nbsp;SOON
      </motion.h1>
      <p className="coming-soon-text">This site will be up soon...</p>
    </div>
  );
}
