export const metadata = {
  title: "麻理盃 － 麻雀理工",
  description: "麻理盃 － 麻雀理工",
};

import Leaderboard from "@/components/leaderboard";
import YoutubeReplays from "@/components/youtube-replays";

export default function Home() {
  return (
    <>
      <Leaderboard />
      <YoutubeReplays />
    </>
  );
}
