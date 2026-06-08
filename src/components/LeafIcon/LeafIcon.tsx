interface LeafIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function LeafIcon({ size = 18, className = "", color = "currentColor" }: LeafIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21c-4-1-8-5-8-11 0-2 .5-4 1.5-5.5C7 7 9 9 12 9.5c3-.5 5-2.5 6.5-5C19.5 6 20 8 20 10c0 6-4 10-8 11z" />
      <path d="M12 21V9.5" />
    </svg>
  );
}
