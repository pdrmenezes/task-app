import Image from "next/image";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />
        <p className={`${GeistSans.className} pb-1 text-lg text-neutral-700`}>
          Taskify
        </p>
      </div>
    </Link>
  );
};
