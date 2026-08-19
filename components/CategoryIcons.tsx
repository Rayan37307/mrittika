type IconProps = { className?: string };

export function MugIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M12 14h20v18a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6V14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 18h2a5 5 0 0 1 0 10h-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 14c0-2 1.5-3 1.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PotIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M15 16h18l-2.5 20a4 4 0 0 1-4 3.5h-5a4 4 0 0 1-4-3.5L15 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 16h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M18 16c0-3.5 2.7-6.5 6-6.5s6 3 6 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <ellipse cx="24" cy="24" rx="17" ry="17" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="9" ry="9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function DecorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="9" y="9" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="27" y="9" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="9" y="27" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="27" y="27" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function BowlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M8 21h32a16 12 0 0 1-32 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 33c0 2.5 1.5 4 3 4h10c1.5 0 3-1.5 3-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WheelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="30" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M18 24c0-4 2.5-8 6-8s5 2 5 5-2 4-4 4-3-1-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="30" r="2" fill="currentColor" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M12 30C12 16 26 10 38 10c0 14-8 26-22 26-3 0-5-1-5-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 34C20 26 27 20 36 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M24 8c1 8 3 10 11 11-8 1-10 3-11 11-1-8-3-10-11-11 8-1 10-3 11-11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
