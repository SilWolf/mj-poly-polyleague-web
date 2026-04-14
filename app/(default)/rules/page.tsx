import Image from "next/image";
import Jpg1 from "./assets/1.jpg";
import Jpg2 from "./assets/2.jpg";
import Jpg3 from "./assets/3.jpg";
import Jpg4 from "./assets/4.jpg";
import Jpg5 from "./assets/5.jpg";
import Jpg6 from "./assets/6.jpg";
import Jpg7 from "./assets/7.jpg";
import Jpg8 from "./assets/8.jpg";
import Jpg9 from "./assets/9.jpg";
import Jpg10 from "./assets/10.jpg";
import Jpg11 from "./assets/11.jpg";

export default function Rules() {
  return (
    <>
      <div className="mx-auto max-w-6xl mt-12">
        <h2 className="text-5xl text-[#fff4d6] font-bold mb-6 pl-8">規則</h2>
        <div className="relative h-full overflow-hidden rounded-4xl bg-[#fff4d6] shadow-xl md:px-8 md:py-8 md:space-y-4">
          <Image src={Jpg1} alt="1" />
          <Image src={Jpg2} alt="2" />
          <Image src={Jpg3} alt="3" />
          <Image src={Jpg4} alt="4" />
          <Image src={Jpg5} alt="5" />
          <Image src={Jpg6} alt="6" />
          <Image src={Jpg7} alt="7" />
          <Image src={Jpg8} alt="8" />
          <Image src={Jpg9} alt="9" />
          <Image src={Jpg10} alt="10" />
          <Image src={Jpg11} alt="11" />
        </div>
      </div>
    </>
  );
}
