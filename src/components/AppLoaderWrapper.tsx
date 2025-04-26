'use client';

import { useEffect, useState } from 'react';

export default function AppLoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 50); // adjust delay for smoother UX

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Scroll to hash once DOM is ready
    const hash = window.location.hash?.replace('#', '') || 'about';
    const el = document.getElementById(hash);

    if (el) {
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
        <div className="animate-pulse text-xl">Loading app...</div>
      </div>
    );
  }

  return <>{children}</>;
}
