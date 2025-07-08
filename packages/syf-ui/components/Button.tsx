import React, { forwardRef } from "react";
import { Button as RadixButton } from "@radix-ui/themes";
import { cn } from "../utils/cn";
import { Theme } from "@radix-ui/themes";

// 映射自定义 variant 到 Radix UI Button variants
const mapVariantToRadix = (variant?: string) => {
  switch (variant) {
    case "default":
      return "solid";
    case "destructive":
      return "solid";
    case "outline":
      return "outline";
    case "secondary":
      return "soft";
    case "ghost":
      return "ghost";
    case "link":
      return "ghost";
    default:
      return "solid";
  }
};

// 映射自定义 size 到 Radix UI Button sizes
const mapSizeToRadix = (size?: string) => {
  switch (size) {
    case "sm":
      return "1";
    case "default":
      return "2";
    case "lg":
      return "3";
    case "icon":
      return "2";
    default:
      return "2";
  }
};

// 根据 variant 获取颜色
const getColorFromVariant = (variant?: string) => {
  switch (variant) {
    case "destructive":
      return "red";
    case "secondary":
      return "gray";
    default:
      return undefined;
  }
};

export interface ButtonProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadixButton>,
    "variant" | "size" | "color"
  > {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const additionalClasses = cn(
      variant === "link" && "underline-offset-4 hover:underline",
      variant === "icon" && "aspect-square",
      className
    );

    return (
      <Theme>
        <RadixButton
          variant={mapVariantToRadix(variant)}
          size={mapSizeToRadix(size)}
          color={getColorFromVariant(variant)}
          className={additionalClasses}
          ref={ref}
          {...props}
        />
      </Theme>
    );
  }
);

Button.displayName = "Button";

export { Button };
