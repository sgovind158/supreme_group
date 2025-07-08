import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
// import CustomLoader from '@/components/server/Loder/circleLoader';
import { cn } from "@/utils/cva";
import CustomLoader from "@/components/server/Loader/CustomLoader";

export type IButtonIntentTypes = "primary" | null | undefined;

// primary btn
// edit btn
// delete btn
/**
 * Represents the button variants for the CvaButton component.
 */
const buttonVariants = cva("flex gap-[4px] items-center ", {
  /**
   * Represents the variants for the intent of the button.
   */
  variants: {
    intent: {
      /**
       * Represents the primary intent variant of the button.
       */
      primary: [
        "bg-[#5CD6FF]",
        "text-[#000000]",
        "border border-[#00BFFF]",
        "hover:bg-[#00BFFF]",
        "hover:text-[#FFFFFF]",
        "rounded-[100px]",
        "py-[14px]",
        "px-[30px]",
        "block",
        "font-medium",
        "text-base"
      ],
      langageBtn:[
        "text-black",
        "font-semibold",
        "flex",
        "items-center",
        "gap-[4px]",
        "hover:text-blue-600",
        "text-[12px]"
      ]
     
    },
    size: {
      small: ["px-[12px]", "py-[4px]"],
      medium: ["px-[18px]", "py-[18px]"],
    },
  },
  compoundVariants: [{ intent: "primary", class: "cursor-pointer" }],
  defaultVariants: {
    intent: "primary",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  handleClick?: () => void;
  disabled?: boolean;
  showIcon?: boolean;
  isLoading?: boolean;
}

// Define CvaButton component
const CvaButton: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  handleClick,
  disabled = false,
  type = "button",
  // showIcon = false,
  isLoading = false,
  ...props
}) => (
  <button
    disabled={isLoading || disabled}
    onClick={handleClick}
    type={type}
    className={cn(
      `${
        disabled || isLoading
          ? "!bg-[gray] cursor-not-allowed flex justify-center gap-[12px]"
          : "cursor-pointer"
      }`,
      buttonVariants({ intent, size, className })
    )}
    {...props}
  >
    {/* {showIcon && getIntentIcon(intent)} */}
    {props.children}
    <CustomLoader isLoading={isLoading} />
  </button>
);

CvaButton.displayName = "Button";

export { CvaButton, buttonVariants };
