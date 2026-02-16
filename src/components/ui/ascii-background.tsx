"use client";

import { useEffect, useRef } from "react";

export function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // ASCII characters to use
    const chars = "!@#$%^&*()_+-=[]{}|;:',.<>?/~`01αβγδεζηθικλμνξοπρστυφχψω";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const rows = Math.floor(canvas.height / fontSize);

    // Create grid of characters
    const grid: string[][] = [];
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      for (let j = 0; j < columns; j++) {
        grid[i][j] = chars[Math.floor(Math.random() * chars.length)];
      }
    }

    // Animation
    let frameCount = 0;
    const animate = () => {
      frameCount++;

      // Clear canvas with semi-transparent background for fade effect
      ctx.fillStyle = "rgba(1, 4, 9, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      ctx.textBaseline = "top";

      // Update and draw characters
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          // Randomly change some characters
          if (Math.random() < 0.02) {
            grid[i][j] = chars[Math.floor(Math.random() * chars.length)];
          }

          // Calculate opacity based on position and time
          const distance = Math.sqrt(
            Math.pow((j * fontSize) - canvas.width / 2, 2) + 
            Math.pow((i * fontSize) - canvas.height / 2, 2)
          );
          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / 2, 2) + 
            Math.pow(canvas.height / 2, 2)
          );
          const normalizedDistance = distance / maxDistance;
          
          // Create a pulsing effect
          const pulse = Math.sin(frameCount * 0.02 + (i + j) * 0.1) * 0.5 + 0.5;
          const opacity = (1 - normalizedDistance * 0.7) * pulse * 0.15;

          // Draw character
          ctx.fillStyle = `rgba(88, 166, 255, ${opacity})`;
          ctx.fillText(grid[i][j], j * fontSize, i * fontSize);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
