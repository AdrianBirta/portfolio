'use client';

import { useEffect } from 'react';

export default function HashRedirect() {
  useEffect(() => {
    const validHashes = [
      '#about',
      '#contact',
      '#education',
      '#experience',
      '#portfolio',
      '#skills',
      '#micro-projects'
    ]; // Add all valid hashes here

    const handleHashChange = () => {
      !validHashes.includes(window.location.hash) && window.location.replace('#about')
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
