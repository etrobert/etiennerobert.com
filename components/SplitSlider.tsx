import { useState, useRef } from 'react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import IconLink from './IconLink';
import ArrowsHorizontalIcon from './icons/ArrowsHorizontalIcon';

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
    <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-white opacity-60" />
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

  const devPct = `${pos * 100}%`;
  const creativePct = `${(1 - pos) * 100}%`;

  return (
    <div
      ref={containerRef}
      className="relative h-dvh w-full overflow-hidden select-none"
    >
      {/* Dev panel */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden bg-[#f5e6d3] text-[#2a1a0e]"
        style={{ width: devPct }}
      >
        <div className="absolute inset-y-0 left-0 flex w-screen flex-col items-center justify-center gap-3">
          <h1 className="text-4xl font-extrabold tracking-tight">Étienne Robert</h1>
          <h2 className="text-xl tracking-wide opacity-70">Software</h2>
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

      {/* Creative panel */}
      <div
        className="absolute top-0 right-0 h-full overflow-hidden text-[#f0f0f0]"
        style={{ width: creativePct, backgroundImage: 'url(/dance.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-y-0 right-0 flex w-screen flex-col items-center justify-center gap-3">
          <h1 className="text-4xl font-extrabold tracking-tight">Étienne Robert</h1>
          <h2 className="text-xl tracking-wide opacity-70">Dance</h2>
          <div className="flex gap-4">
            <IconLink
              label="Instagram Profile"
              href="https://www.instagram.com/thesoft.emperor"
              icon={<InstagramIcon />}
            />
          </div>
        </div>
      </div>

      <Handle
        containerRef={containerRef}
        left={devPct}
        valuenow={Math.round(pos * 100)}
        onChange={setPos}
      />
    </div>
  );
};

export default SplitSlider;
