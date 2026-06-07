import { useCallback, useEffect, useState } from 'react';

export const useRoute = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === window.location.pathname) return;
    window.history.pushState(null, '', to);
    window.scrollTo(0, 0);
    setPath(to);
  }, []);

  return [path, navigate] as const;
};
