type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
}


export default function VuetifyIcon({ size = 24, color = "#1867C0", className }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      className={className}
    ><title>Vuetify</title><path d="M6.312 12.564 12.636 1.2H0l6.312 11.364ZM14.94 1.2 7.464 14.64 12 22.8 24 1.2h-9.06Zm4.98 2.4L12 17.856l-1.788-3.216L16.344 3.6h3.576ZM6.312 7.62 4.08 3.6h4.476L6.312 7.62Z" /></svg>)
}