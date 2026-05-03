export function Container({
  children,
  size = "default",
  className = "",
}: {
  children: React.ReactNode;
  size?: "narrow" | "default" | "wide";
  className?: string;
}) {
  const max =
    size === "narrow"
      ? "max-w-2xl"
      : size === "wide"
        ? "max-w-6xl"
        : "max-w-4xl";
  return (
    <div className={`mx-auto w-full ${max} px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
