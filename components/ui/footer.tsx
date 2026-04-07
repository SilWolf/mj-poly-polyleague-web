import Image from "next/image";
import Logo from "@/public/images/logo.webp";
import { Discord, Instagram, Whatsapp } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container max-w-6xl mx-auto flex items-center py-12 gap-x-12 text-xl">
        <div>
          <Image
            className="w-[200px] mx-auto"
            src={Logo}
            width={2000}
            height={749}
            alt="Entity Logo"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-12">
            <div className="flex gap-x-2 items-center">
              <Whatsapp />
              <span>Whataspp: </span>
              <span>51143454</span>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex gap-x-2 items-center">
              <Instagram />
              <span>IG: </span>
              <span>Mahjong.poly</span>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex gap-x-2 items-center">
              <Discord />
              <span>Discord: </span>
              <span>@Mahjong.poly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
