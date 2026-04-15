import { useState, useRef, useEffect, useCallback } from 'react';

const SplitSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0.5);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    let p = (clientX - rect.left) / rect.width;
    p = Math.max(0.1, Math.min(0.9, p));
    setPos(p);
  }, []);

  useEffect(() => {
    const onMouseUp = () => {
      dragging.current = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (dragging.current) updatePos(e.clientX);
    };
    const onTouchEnd = () => {
      dragging.current = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (dragging.current) updatePos(e.touches[0].clientX);
    };

    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [updatePos]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    e.preventDefault();
  };

  const devPct = `${pos * 100}%`;
  const creativePct = `${(1 - pos) * 100}%`;

  return (
    <div
      ref={containerRef}
      className="relative h-dvh w-full overflow-hidden select-none"
    >
      {/* Dev panel */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: devPct, background: '#1a1a1a', color: '#f0f0f0' }}
      >
        <div
          className="absolute inset-y-0 flex flex-col items-center justify-center gap-3"
          style={{ width: '100vw', left: 0 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight">Software</h2>
          <p className="text-sm tracking-wide opacity-50">
            dev work & open source
          </p>
        </div>
      </div>

      {/* Creative panel */}
      <div
        className="absolute top-0 right-0 h-full overflow-hidden"
        style={{ width: creativePct, background: '#f5e6d3', color: '#2a1a0e' }}
      >
        <div
          className="absolute inset-y-0 flex flex-col items-center justify-center gap-3"
          style={{ width: '100vw', right: 0 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight">Creative</h2>
          <p className="text-sm tracking-wide opacity-50">dance & queer art</p>
        </div>
      </div>

      {/* Handle */}
      <div
        role="slider"
        aria-label="Drag to reveal more of each side"
        aria-valuenow={Math.round(pos * 100)}
        aria-valuemin={10}
        aria-valuemax={90}
        tabIndex={0}
        className="absolute top-0 bottom-0 z-10 flex cursor-col-resize items-center justify-center"
        style={{ left: devPct, transform: 'translateX(-50%)', width: '44px' }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div
          className="absolute inset-y-0 bg-white opacity-60"
          style={{ width: '3px', left: '50%', transform: 'translateX(-50%)' }}
        />
        <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm text-neutral-500 shadow-lg">
          ⇔
        </div>
      </div>
    </div>
  );
};

export default SplitSlider;
