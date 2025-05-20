'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!mounted ? (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black flex items-center justify-center z-50">
          <div className="flex flex-col items-center text-white sm:gap-4 gap-2">
            <div className="spinner-border snipper-border-refresh animate-spin mb-4" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <Image
                  src="/images/iconM24.webp"
                  alt="Logo monitor"
                  width={24}
                  height={24}
                  loading="lazy"
                />
                <span className="text-xl font-semibold">Portfolio Loading...</span>
              </div>
              <p className="text-sm">Adrian Birta (Senior Frontend Engineer)</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="sectionsContainerWrapper w-full h-full sm:pl-10 sm:pr-5">
            <div className="hashSectionsContainer sm:px-2">
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}