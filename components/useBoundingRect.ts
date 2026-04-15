import { useEffect, useRef, useState } from 'react';

export function useBoundingRect<T extends Element>() {
  const ref = useRef<T>(null);
  const [rect, setRect] = useState<DOMRectReadOnly | null>(null);

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
