"use client";

import Icon from "@/components/icon";
import Link from "next/link";
import Time from "@/components/time";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "DEVMODE";

  return (
    <div className="flex justify-between px-8 py-4">
      <div className="flex gap-x-4">
        <Link href="/">
          <div className="flex items-center gap-x-2">
            <Icon name={pathname === "/" ? "circle-filled" : "circle-empty"} />
            <span className="uppercase">Info</span>
          </div>
        </Link>
        <div className="flex items-center gap-x-2 cursor-not-allowed opacity-60">
          <Icon name="not-allowed" />
          <span className="uppercase">Info</span>
        </div>
      </div>
      <div className="flex gap-x-4">
        <div className="flex items-center gap-x-2">
          <Icon name="commit" />
          <span className="uppercase">{sha.slice(0, 7)}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Icon name="location" />
          <Time />
        </div>
      </div>
    </div>
  );
}
