import Image from "next/image";
import YoutubeReplay from "@/public/images/youtube-replay-image.webp";
import { ArrowRight, Youtube } from "react-bootstrap-icons";

export default async function YoutubeReplays() {
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
                standard: {
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
        thumbnail: item.snippet.thumbnails.standard.url,
        videoId: item.snippet.resourceId.videoId,
        href: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}&list=PLVFu6tO99GH7MipGlQ7cptmKBNvCmINeF`,
      })),
    );

  return (
    <section className="bg-[#fdd621] relative pt-8 h-[500px]">
      <Image
        src={YoutubeReplay}
        height={480}
        alt=""
        className="absolute bottom-0 left-0"
        data-aos="fade-up"
      />
      <div className="relative container max-w-6xl mx-auto z-10">
        <h3 className="text-6xl font-bold text-[#ff9247] mb-8 text-right">
          精華重溫
        </h3>
        <div className="flex snap-x snap-mandatory overflow-x-auto max-w-full gap-x-4">
          {replays.map((replay) => (
            <a
              className="block snap-start w-80 shrink-0 bg-[#fdd621]"
              href={replay.href}
              target="_blank"
            >
              <img
                src={replay.thumbnail}
                alt={replay.title}
                className="rounded-2xl border-4 border-amber-500"
              />
              <h6 className="font-bold">{replay.title}</h6>
            </a>
          ))}
        </div>
        <div className="pt-4">
          <a
            className="flex justify-end items-center gap-x-2 text-2xl text-[#FF0033] hover:underline underline-offset-4"
            href="https://www.youtube.com/playlist?list=PLVFu6tO99GH7MipGlQ7cptmKBNvCmINeF"
            target="_blank"
          >
            <Youtube /> 看更多 <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
