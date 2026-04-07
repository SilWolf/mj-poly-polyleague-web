import Image from "next/image";
import Illustration from "@/public/images/page-illustration.webp";

export default function PageIllustration({
  multiple = false,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      <Image
        className="max-w-none w-full"
        src={Illustration}
        width={1376}
        height={768}
        alt="Page illustration"
      />
    </>
  );
}
