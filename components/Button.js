import Link from "next/link";

export default function Button({
  children,
  href,
  variant,
  className,
  type,
  onClick,
  ...props
}) {
  let variantStyle = "bg-warm-gold text-graphite hover:bg-[#c49542]";

  if (variant === "secondary") {
    variantStyle = "border border-steel-grey bg-white text-dark-text hover:bg-off-white hover:border-[#b0b5ae]";
  } else if (variant === "dark") {
    variantStyle = "bg-graphite text-white hover:bg-[#333834]";
  } else if (variant === "outline-light") {
    variantStyle = "border border-steel-grey text-steel-grey hover:text-white hover:border-white";
  }

  let baseStyle = "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-offset-2";

  let combinedClasses = baseStyle + " " + variantStyle;
  if (className) {
    combinedClasses = combinedClasses + " " + className;
  }

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  let buttonType = "button";
  if (type) {
    buttonType = type;
  }

  return (
    <button
      type={buttonType}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
