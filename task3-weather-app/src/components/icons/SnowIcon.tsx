interface IconProps {
  className?: string;
}

export default function SnowIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://w3.org"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19M12 7l3-3M12 17l-3 3M17 12l3 3M7 12l-3-3"
      />
    </svg>
  );
}
