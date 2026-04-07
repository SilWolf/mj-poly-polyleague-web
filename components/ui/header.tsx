import Link from "next/link";
import Image from "next/image";
import HeroLogo from "@/public/images/hero-logo.webp";
import { BoxArrowUpRight } from "react-bootstrap-icons";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 w-full">
      <div className="container max-w-6xl mx-auto text-white font-bold flex text-lg justify-center">
        <div>
          <Image className="pt-3 w-[80px] pr-4" src={HeroLogo} alt="麻理盃" />
        </div>
        <div>
          <Link
            className="inline-block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
            href="/"
          >
            首頁
          </Link>
          <Link
            className="inline-block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
            href="/introduction"
          >
            賽事宗旨
          </Link>
          <Link
            className="inline-block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
            href="/replays"
          >
            精華
          </Link>
          <Link
            className="inline-block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
            href="/rules"
          >
            規則
          </Link>
          <Link
            className="inline-block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
            href="/players"
          >
            選手資訊
          </Link>
          <Link
            className="inline-block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
            href="https://mahjong-poly.mystrikingly.com/"
            target="_blank"
          >
            聯絡麻雀理工 <BoxArrowUpRight className="inline" />
          </Link>
        </div>
      </div>
    </header>
  );
}
