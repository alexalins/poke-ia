import { metricIconPaths } from '../../models/presenters';
import type { MetricIconKind } from '../../models/presenters';

export const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    <path d="M14 6L8 12l6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12h10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const BadgeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M3 12h18" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
  </svg>
);

export const MetricIcon = ({ kind }: { kind: MetricIconKind }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    {metricIconPaths[kind]}
  </svg>
);
