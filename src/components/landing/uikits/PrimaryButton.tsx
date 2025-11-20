// type ButtonProps = {
//   title: string;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
//   href?: string;
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
//   btnType?: "PRIMARY" | "SECONDARY" | "DANGER" | "DEFAULT";
// };

// const PrimaryButton = ({
//   title,
//   onClick,
//   href,
//   className,
//   disabled,
//   leftIcon,
//   rightIcon,
//   btnType = "PRIMARY",
// }: ButtonProps) => {
//   return (
//     <button
//       disabled={disabled}
//       onClick={onClick}
//       className={`${
//         btnType === "PRIMARY"
//           ? "bg-[#10793F]"
//           : btnType === "DANGER"
//           ? "bg-[#FF0000]"
//           : btnType === "SECONDARY"
//           ? "bg-[#1E1E1E]"
//           : "bg-transparent"
//       } flex items-center gap-[10px] md:gap-[5px] justify-center font-semibold text-sm px-6 py-3 rounded-[15px] focus:outline-none cursor-pointer ${className}`}
//     >
//       {leftIcon && leftIcon}
//       {title}
//       {rightIcon && rightIcon}
//     </button>
//   );
// };

// export default PrimaryButton;

import Link from "next/link";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  href?: string; // make href optional
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  btnType?: "PRIMARY" | "SECONDARY" | "DANGER" | "DEFAULT";
};

const PrimaryButton = ({
  title,
  onClick,
  href,
  className,
  disabled,
  leftIcon,
  rightIcon,
  btnType = "PRIMARY",
}: ButtonProps) => {
  const baseStyles = `${
    btnType === "PRIMARY"
      ? "bg-[#10793F]"
      : btnType === "DANGER"
      ? "bg-[#FF0000]"
      : btnType === "SECONDARY"
      ? "bg-[#1E1E1E]"
      : "bg-transparent"
  } flex items-center gap-[10px] justify-center font-semibold text-sm px-6 py-2 rounded-[15px] focus:outline-none cursor-pointer ${className}`;

  const content = (
    <>
      {leftIcon && leftIcon}
      {title}
      {rightIcon && rightIcon}
    </>
  );

  return href ? (
    <Link href={href} className={`${baseStyles} ${className}`}>
      {content}
    </Link>
  ) : (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
