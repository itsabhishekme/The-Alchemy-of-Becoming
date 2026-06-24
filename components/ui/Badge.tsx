"use client";

import { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Info,
  Flame,
  Star,
  Heart,
  Compass,
  BookOpen,
  Shield,
  TrendingUp,
  Crown,
} from "lucide-react";

type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "premium"
  | "outline"
  | "ghost";

type BadgeSize =
  | "xs"
  | "sm"
  | "md"
  | "lg";

type BadgeIcon =
  | "sparkles"
  | "success"
  | "warning"
  | "info"
  | "flame"
  | "star"
  | "heart"
  | "compass"
  | "book"
  | "shield"
  | "growth"
  | "crown";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?: BadgeVariant;

  size?: BadgeSize;

  icon?: BadgeIcon;

  rounded?: boolean;

  pulse?: boolean;

  glow?: boolean;

  animated?: boolean;
}

const variantStyles: Record<
  BadgeVariant,
  string
> = {
  default:
    "bg-zinc-800 text-zinc-200 border-zinc-700",

  primary:
    "bg-amber-500 text-black border-amber-500",

  secondary:
    "bg-white/10 text-white border-white/10",

  success:
    "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",

  warning:
    "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",

  danger:
    "bg-red-500/15 text-red-400 border-red-500/20",

  info:
    "bg-sky-500/15 text-sky-400 border-sky-500/20",

  premium:
    "bg-gradient-to-r from-amber-400 to-yellow-500 text-black border-transparent",

  outline:
    "bg-transparent text-white border-white/20",

  ghost:
    "bg-transparent text-zinc-300 border-transparent",
};

const sizeStyles: Record<
  BadgeSize,
  string
> = {
  xs: "px-2 py-1 text-[10px]",
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

const iconMap = {
  sparkles: Sparkles,
  success: CheckCircle2,
  warning: AlertCircle,
  info: Info,
  flame: Flame,
  star: Star,
  heart: Heart,
  compass: Compass,
  book: BookOpen,
  shield: Shield,
  growth: TrendingUp,
  crown: Crown,
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  icon,
  rounded = true,
  pulse = false,
  glow = false,
  animated = false,
  className = "",
  ...props
}: BadgeProps) {
  const Icon =
    icon && iconMap[icon]
      ? iconMap[icon]
      : null;

  const badgeContent = (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        border
        font-medium
        tracking-wide
        transition-all
        duration-300
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${
          rounded
            ? "rounded-full"
            : "rounded-xl"
        }
        ${
          pulse
            ? "animate-pulse"
            : ""
        }
        ${
          glow &&
          variant === "primary"
            ? "shadow-lg shadow-amber-500/30"
            : ""
        }
        ${
          glow &&
          variant === "premium"
            ? "shadow-xl shadow-amber-500/20"
            : ""
        }
        ${className}
      `}
      {...props}
    >
      {Icon && (
        <Icon
          className={
            size === "xs"
              ? "h-3 w-3"
              : size === "sm"
              ? "h-3.5 w-3.5"
              : size === "md"
              ? "h-4 w-4"
              : "h-5 w-5"
          }
        />
      )}

      <span>{children}</span>
    </span>
  );

  if (!animated) {
    return badgeContent;
  }

  return (
    <motion.span
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.2,
      }}
      className="inline-block"
    >
      {badgeContent}
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/* PRESET BADGES */
/* -------------------------------------------------------------------------- */

export function TransformationBadge() {
  return (
    <Badge
      variant="premium"
      icon="sparkles"
      glow
    >
      Transformation
    </Badge>
  );
}

export function HealingBadge() {
  return (
    <Badge
      variant="secondary"
      icon="heart"
    >
      Healing
    </Badge>
  );
}

export function ResilienceBadge() {
  return (
    <Badge
      variant="success"
      icon="shield"
    >
      Resilience
    </Badge>
  );
}

export function PurposeBadge() {
  return (
    <Badge
      variant="info"
      icon="compass"
    >
      Purpose
    </Badge>
  );
}

export function WisdomBadge() {
  return (
    <Badge
      variant="warning"
      icon="book"
    >
      Wisdom
    </Badge>
  );
}

export function GrowthBadge() {
  return (
    <Badge
      variant="premium"
      icon="growth"
    >
      Growth
    </Badge>
  );
}

/* -------------------------------------------------------------------------- */
/* BADGE GROUP */
/* -------------------------------------------------------------------------- */

interface BadgeGroupProps {
  items: string[];
}

export function BadgeGroup({
  items,
}: BadgeGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge
          key={item}
          variant="outline"
          size="sm"
        >
          {item}
        </Badge>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CATEGORY BADGE */
/* -------------------------------------------------------------------------- */

interface CategoryBadgeProps {
  category: string;
}

export function CategoryBadge({
  category,
}: CategoryBadgeProps) {
  const mapping: Record<
    string,
    {
      variant: BadgeVariant;
      icon: BadgeIcon;
    }
  > = {
    Transformation: {
      variant: "premium",
      icon: "sparkles",
    },

    Healing: {
      variant: "secondary",
      icon: "heart",
    },

    Resilience: {
      variant: "success",
      icon: "shield",
    },

    Purpose: {
      variant: "info",
      icon: "compass",
    },

    Wisdom: {
      variant: "warning",
      icon: "book",
    },

    Growth: {
      variant: "premium",
      icon: "growth",
    },
  };

  const config =
    mapping[category] || {
      variant: "outline" as BadgeVariant,
      icon: "star" as BadgeIcon,
    };

  return (
    <Badge
      variant={config.variant}
      icon={config.icon}
      size="sm"
    >
      {category}
    </Badge>
  );
}