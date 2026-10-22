interface IconProps {
  className?: string;
}

export default function RainIcon({ className }: IconProps) {
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
        d="M12 3v1.5M20.25 10.5M4.12 11.25A5.625 5.625 0 0113.5 9.75a6 6 0 0111.25-3h.008a4.5 4.5 0 013.738 7.31L19.5 21"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17l-1 3m4-3l-1 3m4-3l-1 3"
      />
    </svg>
  );
}
