import { useState, useRef } from 'react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import IconLink from './IconLink';
import ArrowsHorizontalIcon from './icons/ArrowsHorizontalIcon';

const SLANT = 0.1;
// Button is at 33% from bottom = 67% from top
// Separator x at vertical fraction t: pos + SLANT * (1 - 2t)
const BUTTON_TOP_FRACTION = 0.67;
const HANDLE_SLANT_OFFSET = SLANT * (1 - 2 * BUTTON_TOP_FRACTION); // ≈ -0.034

type HandleProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  left: string;
  onChange: (pos: number) => void;
  valuenow: number;
};

const Handle = ({ containerRef, left, onChange, valuenow }: HandleProps) => (
  <div
    role="slider"
    aria-label="Drag to reveal more of each side"
    aria-valuenow={valuenow}
    aria-valuemin={10}
    aria-valuemax={90}
    tabIndex={0}
    className="absolute inset-y-0 z-10 flex w-11 -translate-x-1/2 cursor-col-resize touch-none items-end justify-center pb-[33dvh]"
    style={{ left }}
    onPointerDown={(event) => {
      event.currentTarget.setPointerCapture(event.pointerId);
    }}
    onPointerMove={(event) => {
      if (event.buttons === 0) return;
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      let p = (event.clientX - rect.left) / rect.width;
      p = Math.max(0.1, Math.min(0.9, p));
      onChange(p);
    }}
  >
    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-500 shadow-lg">
      <div className="h-5 w-5">
        <ArrowsHorizontalIcon />
      </div>
    </div>
  </div>
);

const SplitSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0.5);

  // Separator goes from (pos + SLANT) at top to (pos - SLANT) at bottom
  const topPos = pos + SLANT;
  const bottomPos = pos - SLANT;

  const leftClip = `polygon(0 0, ${topPos * 100}% 0, ${bottomPos * 100}% 100%, 0 100%)`;
  const rightClip = `polygon(${topPos * 100}% 0, 100% 0, 100% 100%, ${bottomPos * 100}% 100%)`;

  return (
    <div
      ref={containerRef}
      className="relative h-dvh w-full overflow-hidden select-none"
    >
      {/* Dev panel */}
      <div
        className="absolute inset-0 bg-[#1a1a1a] text-[#f0f0f0]"
        style={{ clipPath: leftClip }}
      >
        <div className="absolute inset-y-0 left-0 flex w-screen flex-col items-center justify-center gap-3">
          <h2 className="text-4xl font-extrabold tracking-tight">Software</h2>
          <p className="text-sm tracking-wide opacity-50">
            low level & web dev
          </p>
          <div className="flex gap-4">
            <IconLink
              label="Github Profile"
              href="https://github.com/etrobert"
              icon={<GithubIcon />}
            />
            <IconLink
              label="Linkedin Profile"
              href="https://www.linkedin.com/in/etienne-robert-dev/"
              icon={<LinkedinIcon />}
            />
          </div>
        </div>
      </div>

      {/* Dance panel */}
      <div
        className="absolute inset-0 bg-[#f5e6d3] text-[#2a1a0e]"
        style={{ clipPath: rightClip }}
      >
        <div className="absolute inset-y-0 right-0 flex w-screen flex-col items-center justify-center gap-3">
          <h2 className="text-4xl font-extrabold tracking-tight">Dance</h2>
          <p className="text-sm tracking-wide opacity-50">dance & aerials</p>
          <div className="flex gap-4">
            <IconLink
              label="Instagram Profile"
              href="https://www.instagram.com/thesoft.emperor"
              icon={<InstagramIcon />}
            />
          </div>
        </div>
      </div>

      {/* Diagonal separator line */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ zIndex: 5 }}
      >
        <line
          x1={`${topPos * 100}%`}
          y1="0%"
          x2={`${bottomPos * 100}%`}
          y2="100%"
          stroke="white"
          strokeWidth="3"
          strokeOpacity="0.6"
        />
      </svg>

      <Handle
        containerRef={containerRef}
        left={`${(pos + HANDLE_SLANT_OFFSET) * 100}%`}
        valuenow={Math.round(pos * 100)}
        onChange={setPos}
      />
    </div>
  );
};

export default SplitSlider;
