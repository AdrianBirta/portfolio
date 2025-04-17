import { iconMap } from "@/components/icons/iconMap";

type IconName = keyof typeof iconMap;

type Props = {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
}

export default function Icon({ name, size, color, className }: Props) {
  const Component = iconMap[name];

  if (!Component) return null;

  return <Component size={size} color={color} className={className} />
}