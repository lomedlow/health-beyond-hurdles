import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True only after client-side hydration. Avoids the SSR/client mismatch
 * that a direct `useState` + `useEffect(() => setMounted(true))` pattern
 * would cause, without calling setState from inside an effect body.
 */
export function useHasMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
