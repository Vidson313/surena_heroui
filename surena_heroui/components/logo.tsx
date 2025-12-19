import Image from "next/image";
import clsx from "clsx";

type LogoMarkProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

// Reusable square gradient logo used across the site.
export function LogoMark({ className, size = 40, priority = true }: LogoMarkProps) {
  const dimension = size;

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-500/20",
        className,
      )}
      style={{ width: dimension, height: dimension }}
    >
      <Image
        src="/Primary%20Logomark%20(Transparent)%20(1).svg"
        alt="Surena logo"
        width={Math.round(dimension * 0.8)}
        height={Math.round(dimension * 0.8)}
        className="h-4/5 w-4/5 filter invert brightness-200"
        priority={priority}
      />
    </div>
  );
}
