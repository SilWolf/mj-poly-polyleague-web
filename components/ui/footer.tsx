import Image from "next/image";
import Logo from "@/public/images/logo.webp";

export default function Footer() {
  return (
    <footer>
      <div className="container max-w-6xl mx-auto flex py-12">
        <div>
          <Image
            className="w-[200px] mx-auto"
            src={Logo}
            width={2000}
            height={749}
            alt="Entity Logo"
          />
        </div>
        <div></div>
      </div>
    </footer>
  );
}
