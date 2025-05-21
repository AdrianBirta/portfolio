'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.scrollTop = 0; // For most browsers
    document.documentElement.scrollTop = 0; // For broader compatibility (e.g., Firefox)
  }, [pathname]);

  return null; // This component doesn't render anything visible
}