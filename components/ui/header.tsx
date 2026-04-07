"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 mt-2 w-full md:mt-5">
      <div className="container max-w-6xl mx-auto text-white font-bold space-x-2">
        <Link
          className="px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
          href="/"
        >
          首頁
        </Link>
        <Link
          className="px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
          href="/"
        >
          賽事宗旨
        </Link>
        <Link
          className="px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
          href="/"
        >
          精華
        </Link>
        <Link
          className="px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
          href="/"
        >
          規則
        </Link>
        <Link
          className="px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
          href="/"
        >
          選手資訊
        </Link>
        <Link
          className="px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
          href="/"
        >
          聯絡麻雀理工
        </Link>
      </div>
    </header>
  );
}
