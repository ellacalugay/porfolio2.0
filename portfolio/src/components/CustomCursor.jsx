import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  const [isTouchDevice] = useState('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const [prefersReducedMotion] = useState(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [particles, setParticles] = useState([]);

  const mouseX = useRef({ target: 0, current: 0, last: 0 });
  const mouseY = useRef({ target: 0, current: 0, last: 0 });
  const isHovering = useRef(false);
  const particleId = useRef(0);

  const removeParticle = useCallback((id) => {
    setParticles(prev => prev.filter(p => p.id !== id));
  }, []);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) {
      document.body.style.cursor = 'auto';
      return;
    }

    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      mouseX.current.target = e.clientX;
      mouseY.current.target = e.clientY;

      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], .project-card, .nav-link, .contact-socials a, .resume-btn, .tool-card');
      isHovering.current = !!isInteractive;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const lerp = (current, target, factor) => current + (target - current) * factor;

    const animateCursor = () => {
      const now = Date.now();
      mouseX.current.current = lerp(mouseX.current.current, mouseX.current.target, 0.2);
      mouseY.current.current = lerp(mouseY.current.current, mouseY.current.target, 0.2);

      const distance = Math.sqrt(
        Math.pow(mouseX.current.current - mouseX.current.last, 2) +
        Math.pow(mouseY.current.current - mouseY.current.last, 2)
      );

      if (distance > 2) {
        const newParticle = {
          id: particleId.current++,
          x: mouseX.current.current,
          y: mouseY.current.current,
          createdAt: now,
        };
        setParticles(prev => [...prev, newParticle]);
      }

      mouseX.current.last = mouseX.current.current;
      mouseY.current.last = mouseY.current.current;


      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX.current.current}px, ${mouseY.current.current}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${mouseX.current.current}px, ${mouseY.current.current}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${mouseX.current.current}px, ${mouseY.current.current}px)`;
      }

      if (ringRef.current) ringRef.current.classList.toggle('hover', isHovering.current);
      if (glowRef.current) glowRef.current.classList.toggle('hover', isHovering.current);
      if (dotRef.current) dotRef.current.classList.toggle('hover', isHovering.current);

      requestAnimationFrame(animateCursor);
    };

    const animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = 'auto';
    };
  }, [isTouchDevice, prefersReducedMotion, removeParticle]);

  if (isTouchDevice || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot"></div>
      <div ref={ringRef} className="custom-cursor-ring"></div>
      <div ref={glowRef} className="custom-cursor-glow"></div>
      <div className="particle-container">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{ left: p.x, top: p.y }}
            onAnimationEnd={() => removeParticle(p.id)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default CustomCursor;