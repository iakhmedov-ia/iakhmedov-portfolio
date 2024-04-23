import { useEffect, useState } from "react";
import "../styles/ProgressBar.css";

export default function ProgressBar() {
  const [scrollProgress, setscrollProgress] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (docHeight - windowHeight)) * 100;
      setscrollProgress(scrollPercent);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className="scroll_progress"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
}
