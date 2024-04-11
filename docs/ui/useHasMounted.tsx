import { useEffect, useState } from 'react';

/**
 * Use this if you only want to render something on the client.
 * Stolen from https://www.joshwcomeau.com/snippets/react-hooks/use-has-mounted/
 */
export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
