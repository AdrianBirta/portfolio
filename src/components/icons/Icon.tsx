// src\components\icons\Icon.tsx
import { ComponentType } from "react";
import { iconMap } from "@/components/icons/iconMap";

type IconName = keyof typeof iconMap;

type IconComponentProps = {
  size?: number | string;
  color?: string;
  className?: string;
};

type Props = {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
}

export default function Icon({ name, size, color, className }: Props) {
  const Component = iconMap[name] as ComponentType<IconComponentProps>;

  if (!Component) return null;

  return <Component size={size} color={color} className={className} />
}