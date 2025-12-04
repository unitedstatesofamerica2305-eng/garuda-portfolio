import React, { useEffect, useRef } from 'react';

const Blackhole: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let centerX = width / 2;
    let centerY = height / 2;

    // Performance optimization for mobile
    const isMobile = width < 768;
    const particleCount = isMobile ? 180 : 450;
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      radius: number;
      angle: number;
      distance: number;
      speed: number;
      color: string;
      baseDistance: number;

      constructor() {
        const minDim = Math.min(width, height);
        // On mobile, increase scale factor to ensure it fills the vertical screen
        const scaleFactor = isMobile ? 0.75 : 0.45;
        
        this.baseDistance = Math.random() * (minDim * scaleFactor) + (minDim * 0.1);
        this.distance = this.baseDistance;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.005 + 0.002;
        this.radius = Math.random() * 2 + 0.5;
        this.x = centerX + Math.cos(this.angle) * this.distance;
        this.y = centerY + Math.sin(this.angle) * this.distance;
        this.color = `rgba(255, 0, 51, ${Math.random() * 0.5 + 0.2})`; 
      }

      update() {
        this.angle += this.speed;
        this.distance -= 0.5; 

        if (this.distance < 20) {
           const minDim = Math.min(width, height);
           const scaleFactor = isMobile ? 0.9 : 0.7;
           this.distance = Math.random() * (minDim * scaleFactor) + (minDim * 0.2);
           this.angle = Math.random() * Math.PI * 2;
        }

        // Elliptical distortion
        // Mobile needs a slightly rounder shape to look good in portrait
        const xDistortion = isMobile ? 1.1 : 1.6;
        const yDistortion = isMobile ? 0.9 : 0.6;
        
        this.x = centerX + Math.cos(this.angle) * this.distance * xDistortion; 
        this.y = centerY + Math.sin(this.angle) * this.distance * yDistortion; 
      }

      draw() {
        if(!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // Reduce shadow blur on mobile for performance
        if (!isMobile) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#ff0033";
        }
        ctx.fill();
        ctx.closePath();
      }
    }

    // Init
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw Accretion Disk Glow (Gradient)
      const gradientRadius = Math.min(width, height) * (isMobile ? 0.6 : 0.5);
      const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, gradientRadius);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)'); 
      gradient.addColorStop(0.1, 'rgba(20, 0, 0, 1)');
      gradient.addColorStop(0.4, 'rgba(50, 0, 10, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
       width = window.innerWidth;
       height = window.innerHeight;
       canvas.width = width;
       canvas.height = height;
       centerX = width / 2;
       centerY = height / 2;
    };

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };

  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 opacity-80"
    />
  );
};

export default Blackhole;