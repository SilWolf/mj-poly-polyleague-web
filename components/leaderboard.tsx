import { imageUrlBuilder, sanityClient } from "@/sanity";
import { CSSProperties } from "react";

const defaultRankingBulletStyle: CSSProperties = {
  // background: "#ff9247",
  color: "#ff9247",
};

const rankingBulletStyleMap: Record<number, CSSProperties> = {
  1: {
    background: "#ff9247",
    color: "#FFF",
  },
  2: {
    background: "#ff9247",
    color: "#FFF",
  },
  3: {
    background: "#ff9247",
    color: "#FFF",
  },
};

export default async function Leaderboard() {
  const tPlayers = await sanityClient
    .fetch<
      {
        _id: string;
        player: {
          name: string;
          image: string;
        };
        stats?: {
          point: number;
          matchCount: number;
        };
      }[]
    >(
      `*[_type == "tournament-player" && tournament._ref == "${process.env.TOURNAMENT_ID}"]{_id, player->, stats}`,
    )
    .then((items) =>
      items.sort((a, b) => (b.stats?.point ?? 0) - (a.stats?.point ?? 0)),
    );

  return (
    <section className="mb-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative h-full overflow-hidden rounded-4xl bg-white shadow-xl px-4">
          <div className="md:px-8 py-8 text-lg md:columns-2 gap-x-24">
            {tPlayers.map((tPlayer, i) => (
              <div key={tPlayer._id} className="flex items-center gap-x-2 mb-2">
                <div>
                  <div
                    className="w-8 aspect-square rounded-full flex justify-center items-center"
                    style={
                      rankingBulletStyleMap[i + 1] ?? defaultRankingBulletStyle
                    }
                  >
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1 rounded-r-full py-2 flex gap-x-2 items-center">
                  <img
                    className="aspect-square w-12 border border-amber-500 rounded-full"
                    src={
                      tPlayer.player.image
                        ? imageUrlBuilder
                            .image(tPlayer.player.image)
                            ?.width(192)
                            .height(192)
                            .fit("crop")
                            .crop("top")
                            .url()
                        : undefined
                    }
                  />
                  <div>{tPlayer.player.name}</div>
                </div>
                {tPlayer.stats && (
                  <div className="text-right">
                    <p className="font-bold">
                      {tPlayer.stats.point.toFixed(1)}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {tPlayer.stats.matchCount} 半莊
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
