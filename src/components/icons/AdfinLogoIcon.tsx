type IconProps = {
  size?: number;
  className?: string;
};

export default function AdfinLogoIcon({ size = 56, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text x="0" y="28" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="700" fill="#0A84FF">adfin</text>
    </svg>
  );
}