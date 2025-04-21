import { useEffect, useState } from "react";

export function useFieldError(fieldName: string, state: any) {
  const [showError, setShowError] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    const fieldErrors = state?.errors?.[fieldName];
    if (fieldErrors?.length) {
      setLocalError(fieldErrors.join(" "));
      setShowError(true);

      const hideTimer = setTimeout(() => setShowError(false), 5000);
      const cleanupTimer = setTimeout(() => setLocalError(null), 5500);

      return () => {
        clearTimeout(hideTimer);
        clearTimeout(cleanupTimer);
      };
    }
  }, [state?.errors?.[fieldName]]);

  return { showError, localError };
}
