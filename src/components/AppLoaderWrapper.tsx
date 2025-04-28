'use client';

import Image from 'next/image';
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
    }, 2500); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const hash = window.location.hash?.replace('#', '') || 'about';
    const el = document.getElementById(hash);

    if (el) {
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-black flex items-center justify-center z-50">
        <div className="flex flex-col items-center text-white sm:gap-4 gap-2">
          <div className="pacman border-b-4 border-dashed">
            <div className="pacman-top"></div>
            <div className="pacman-bottom"></div>
            <div className="feed"></div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Image
                src={`/images/iconM24.webp`}
                alt="Logo monitor"
                width={24} // You can adjust this based on actual image size
                height={24}
              />
              <span className="text-xl font-semibold">Portfolio Loading...</span>
            </div>
            <p className="text-sm">Adrian Birta (Senior Frontend Developer)</p>
          </div>
        </div>
      </div>
    );
  }

  return <div className="portfolio-wrapper sm:flex-row flex-col sm:p-5 p-1">{children}</div>;
}