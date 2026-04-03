type IconProps = {
  size?: number;
  className?: string;
};

export default function PersistentLogoIcon({ size = 56, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text x="0" y="29" fontFamily="system-ui, sans-serif" fontSize="27" fontWeight="700" fill="#00AEEF">Persistent</text>
    </svg>
  );
}