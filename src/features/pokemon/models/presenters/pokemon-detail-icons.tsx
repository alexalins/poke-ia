import type { JSX } from 'react';

export type MetricIconKind = 'height' | 'weight' | 'xp' | 'ability';

export const metricIconPaths: Record<MetricIconKind, JSX.Element> = {
  height: (
    <>
      <path d="M12 4v16" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <path d="M8 8l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  weight: (
    <>
      <path d="M10 7h4l1 3h2.5A3.5 3.5 0 0 1 21 13.5v4A3.5 3.5 0 0 1 17.5 21h-11A3.5 3.5 0 0 1 3 17.5v-4A3.5 3.5 0 0 1 6.5 10H9l1-3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 11a2 2 0 1 0 0 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  xp: (
    <>
      <path d="M12 3v18" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <path d="M8 7h8" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <path d="M7 17h10" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </>
  ),
  ability: (
    <>
      <path d="M12 3c2.8 0 5 2.2 5 5 0 1.2-.4 2.2-1.1 3.1L12 15l-3.9-3.9A5 5 0 0 1 7 8c0-2.8 2.2-5 5-5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 21h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 15h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
};
