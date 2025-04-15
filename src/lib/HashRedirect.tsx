'use client';

import HashNavigationHandle from '@/lib/HashNavigationHandle';
import { useEffect } from 'react';

export default function HashRedirect() {
  useEffect(() => {
    const validHashes = [
      '#about',
      '#contact',
      '#education',
      '#experience',
      '#portfolio',
      '#skills'
    ]; // Add all valid hashes here

    const handleHashChange = () => {
      const currentHash = window.location.hash;

      if (!validHashes.includes(currentHash)) {
        window.location.replace('#about');

        HashNavigationHandle("about");
      }
    };

    // Check hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null;
}
