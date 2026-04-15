import { useState, useRef, useCallback } from 'react';

const SplitSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0.5);

  const updatePos = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    let p = (clientX - rect.left) / rect.width;
    p = Math.max(0.1, Math.min(0.9, p));
    setPos(p);
  }, []);

  const devPct = `${pos * 100}%`;
  const creativePct = `${(1 - pos) * 100}%`;

  return (
    <div
      ref={containerRef}
      className="relative h-dvh w-full overflow-hidden select-none"
    >
      {/* Dev panel */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden bg-[#1a1a1a] text-[#f0f0f0]"
        style={{ width: devPct }}
      >
        <div className="absolute inset-y-0 left-0 flex w-screen flex-col items-center justify-center gap-3">
          <h2 className="text-4xl font-extrabold tracking-tight">Software</h2>
          <p className="text-sm tracking-wide opacity-50">
            dev work & open source
          </p>
        </div>
      </div>

      {/* Creative panel */}
      <div
        className="absolute top-0 right-0 h-full overflow-hidden bg-[#f5e6d3] text-[#2a1a0e]"
        style={{ width: creativePct }}
      >
        <div className="absolute inset-y-0 right-0 flex w-screen flex-col items-center justify-center gap-3">
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
        className="absolute inset-y-0 z-10 flex w-11 -translate-x-1/2 cursor-col-resize touch-none items-center justify-center"
        style={{ left: devPct }}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event: React.PointerEvent) => {
          if (event.buttons === 0) return;
          updatePos(event.clientX);
        }}
      >
        <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-white opacity-60" />
        <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm text-neutral-500 shadow-lg">
          ⇔
        </div>
      </div>
    </div>
  );
};

export default SplitSlider;
