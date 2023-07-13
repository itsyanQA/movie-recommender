import { useState, useEffect, useCallback } from "react";

export const useDeviceDetector = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 600);
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth > 600 && window.innerWidth <= 900);
  const [isLaptop, setIsLaptop] = useState<boolean>(window.innerWidth > 900 && window.innerWidth < 1200);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 1200);

  const handleWindowResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    setIsMobile(windowWidth <= 600);
    setIsTablet(windowWidth > 600 && windowWidth <= 900);
    setIsLaptop(windowWidth > 900 && windowWidth <= 1200);
    setIsDesktop(windowWidth > 1200);
  }, [windowWidth]);

  return { isMobile, isTablet, isLaptop, isDesktop };
};
