import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center h-14">
      <Image
        src="/logo.png"
        alt="Logo"
        width={65}
        height={65}
        className="hidden sm:block"
      />
      <Image
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="block sm:hidden"
      />
      <div className="flex flex-col justify-center h-full">
        <span
          className={twMerge(
            "text-xl font-extralight leading-6 tracking-widest text-gradient",
            "sm:text-2xl"
          )}
        >
          Barba
        </span>
        <span
          className={twMerge(
            "text-[20px] font-bold leading-6 pl-px text-gradient",
            "sm:text-[24px]"
          )}
        >
          Brutal
        </span>
      </div>
    </Link>
  );
}
