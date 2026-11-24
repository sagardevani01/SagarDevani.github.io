import React, { useEffect, useRef, useState } from 'react';

export const CursorFollower: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isHoveringRef = useRef(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      isHoveringRef.current = Boolean(
        target && target.closest('a, button, [role="button"], input, textarea')
      );
    };

    const onMouseLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };

    const render = () => {
      const ease = 0.15;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      if (circleRef.current) {
        const scale = isHoveringRef.current ? 1.5 : 1;
        circleRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[1] w-5 h-5 rounded-full transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ willChange: 'transform' }}
    >
      <div className="w-full h-full rounded-full bg-blue-500/20 dark:bg-blue-400/25 border border-blue-500/40 dark:border-blue-400/40 shadow-[0_0_12px_rgba(59,130,246,0.25)]" />
    </div>
  );
};
