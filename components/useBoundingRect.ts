import { useEffect, useRef, useState } from 'react';

export function useBoundingRect<T extends Element>() {
  const ref = useRef<T>(null);
  const [rect, setRect] = useState<DOMRectReadOnly>({
    bottom: 0,
    width: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setRect(entry.contentRect);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, rect] as const;
}
