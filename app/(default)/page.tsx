import Image from "next/image";
import HeroLogo from "@/public/images/hero-logo.webp";
import Logo from "@/public/images/logo.webp";

export const metadata = {
  title: "麻理盃 － 麻雀理工",
  description: "麻理盃 － 麻雀理工",
};

import Leaderboard from "@/components/leaderboard";
import YoutubeReplays from "@/components/youtube-replays";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="px-4 md:px-12 pt-12 pb-20 text-white text-center space-y-2">
          <div className="mx-auto max-w-3xl">
            <Image
              className="w-[200px] mx-auto"
              src={Logo}
              width={2000}
              height={749}
              alt="麻雀理工"
            />
          </div>

          <div className="text-center">
            <Image
              className="w-[520px] mx-auto"
              src={HeroLogo}
              width={1355}
              height={676}
              alt="麻理盃"
            />
          </div>
        </div>
      </div>

      <main className="relative flex grow flex-col">
        <Leaderboard />
        <YoutubeReplays />
      </main>
    </>
  );
}

export const revalidate = 21600;
