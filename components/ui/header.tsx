import Link from "next/link";
import Image from "next/image";
import HeroLogo from "@/public/images/hero-logo.webp";
import { BoxArrowUpRight, List } from "react-bootstrap-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 w-full">
      <div className="container max-w-6xl mx-auto text-white font-bold flex text-lg justify-between">
        <div>
          <Image
            className="ml-4 md:ml-0 pt-3 w-[80px] pr-4"
            src={HeroLogo}
            alt="麻理盃"
          />
        </div>
        <div className="flex-1 hidden md:block">
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
          <a
            className="inline-block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
            href="https://mahjong-poly.mystrikingly.com/"
            target="_blank"
          >
            聯絡麻雀理工 <BoxArrowUpRight className="inline" />
          </a>
        </div>

        <div className="block md:hidden">
          <Menu>
            <MenuButton className="text-2xl w-12 h-12 flex items-center justify-center">
              <List />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="w-full origin-top-right bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
            >
              <MenuItem>
                <Link
                  className="block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
                  href="/"
                >
                  首頁
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
                  href="/introduction"
                >
                  賽事宗旨
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
                  href="/replays"
                >
                  精華
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
                  href="/rules"
                >
                  規則
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
                  href="/players"
                >
                  選手資訊
                </Link>
              </MenuItem>
              <MenuItem>
                <a
                  className="block px-4 py-4 hover:text-amber-500 hover:underline underline-offset-4"
                  href="https://mahjong-poly.mystrikingly.com/"
                  target="_blank"
                >
                  聯絡麻雀理工 <BoxArrowUpRight className="inline" />
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
}
