import { ArrowRight, Youtube } from "react-bootstrap-icons";

export default async function Replays() {
  const replays = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id&part=snippet&maxResults=20&playlistId=PLVFu6tO99GH7MipGlQ7cptmKBNvCmINeF&key=${process.env.GOOGLE_API_KEY}`,
  )
    .then(
      (rawRes) =>
        rawRes.json() as Promise<{
          items: {
            snippet: {
              title: string;
              thumbnails: {
                medium: {
                  url: string;
                };
              };
              playlistId: string;
              resourceId: {
                videoId: string;
              };
            };
          }[];
        }>,
    )
    .then((res) =>
      res.items.map((item) => ({
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        videoId: item.snippet.resourceId.videoId,
        href: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}&list=PLVFu6tO99GH7MipGlQ7cptmKBNvCmINeF`,
      })),
    );

  return (
    <>
      <div className="mx-auto max-w-6xl mt-12">
        <h2 className="text-5xl text-[#fff4d6] font-bold mb-6 pl-8">精華</h2>
        <div className="relative h-full overflow-hidden rounded-4xl bg-[#fff4d6] shadow-xl px-8 py-8">
          <div className="pb-8">
            <a
              className="flex justify-end items-center gap-x-2 text-2xl text-[#FF0033] hover:underline underline-offset-4"
              href="https://www.youtube.com/playlist?list=PLVFu6tO99GH7MipGlQ7cptmKBNvCmINeF"
              target="_blank"
            >
              <Youtube /> 看更多 <ArrowRight />
            </a>
          </div>
          <div className="grid md:grid-cols-4 gap-x-4 gap-y-8">
            {replays.map((replay) => (
              <a
                key={replay.videoId}
                className="block"
                href={replay.href}
                target="_blank"
              >
                <img
                  src={replay.thumbnail}
                  alt={replay.title}
                  className="rounded-2xl"
                />
                <h6 className="font-bold">{replay.title}</h6>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const revalidate = 3600;
