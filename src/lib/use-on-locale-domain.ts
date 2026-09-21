import { useSyncExternalStore } from "react";
import { routing } from "@/i18n/routing";

const productionHosts: string[] = routing.domains?.map((d) => d.domain) ?? [];

const subscribe = () => () => {};

/**
 * True once the page has hydrated on one of the two real, per-locale
 * domains (healthbeyondhurdles.ca, santesansobstacles.ca) rather than a
 * Vercel preview URL or localhost. Always false during server rendering
 * and the initial client render, since the host isn't knowable until
 * `window` exists; this keeps every page statically generated instead of
 * forcing dynamic rendering the way reading the request's Host header in
 * a Server Component would.
 *
 * The one-render delay this implies is a non-issue in practice: nothing
 * reads this before a person can plausibly click the language switcher.
 */
export function useOnLocaleDomain() {
  return useSyncExternalStore(
    subscribe,
    () => productionHosts.includes(window.location.hostname),
    () => false,
  );
}
