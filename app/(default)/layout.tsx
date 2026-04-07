"use client";

import { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";
import HeroLogo from "@/public/images/hero-logo.webp";
import Logo from "@/public/images/logo.webp";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <section
        className="pt-18 pb-48 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/images/header-bg.webp)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="py-12 md:py-20 text-white text-center space-y-4">
            {/* Section header */}
            <div className="text-center" data-aos="fade-up">
              <Image
                className="w-[520px] mx-auto"
                src={HeroLogo}
                width={1355}
                height={676}
                alt="Hero Logo"
              />
            </div>
            <h1 className="text-5xl font-semibold" data-aos="fade-up">
              麻理盃
            </h1>
            <div
              className="mx-auto max-w-3xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <Image
                className="w-[200px] mx-auto"
                src={Logo}
                width={2000}
                height={749}
                alt="Entity Logo"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="relative flex grow flex-col -mt-48">{children}</main>

      <Footer />
    </>
  );
}
