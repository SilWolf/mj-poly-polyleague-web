import { CSSProperties } from "react";

const players = [
  {
    name: "選手一",
    point: "200.0",
  },
  {
    name: "選手二",
    point: "150.0",
  },
  {
    name: "選手三",
    point: "100.0",
  },
  {
    name: "選手四",
    point: "50.0",
  },
  {
    name: "選手五",
    point: "200.0",
  },
  {
    name: "選手六",
    point: "-50.0",
  },
  {
    name: "選手七",
    point: "-100.0",
  },
];

const defaultRankingBulletStyle: CSSProperties = {
  // background: "oklch(76.9% 0.188 70.08)",
  color: "oklch(76.9% 0.188 70.08)",
};

const rankingBulletStyleMap: Record<number, CSSProperties> = {
  1: {
    background: "oklch(76.9% 0.188 70.08)",
    color: "#FFF",
  },
  2: {
    background: "#ff9247",
    color: "#FFF",
  },
  3: {
    background: "#f7a36a",
    color: "#FFF",
  },
};

export default function Leaderboard() {
  return (
    <section>
      <div className="mx-auto max-w-6xl">
        <div className="relative z-20 h-full overflow-hidden rounded-4xl bg-white shadow-xl px-4">
          <div className="p-8 text-2xl columns-2 gap-x-24">
            {players.map((player, i) => (
              <div key={player.name} className="flex items-center gap-x-4 mb-2">
                <div>
                  <div
                    className="w-12 aspect-square rounded-full flex justify-center items-center"
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
                    src={`https://placedog.net/128/128?id=${i + 1}`}
                  />
                  <div>{player.name}</div>
                </div>
                <div>{player.point}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
