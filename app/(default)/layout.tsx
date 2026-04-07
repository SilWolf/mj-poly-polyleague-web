"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

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
        className="pt-18 bg-no-repeat min-h-[720px]"
        style={{
          backgroundImage: "url(/images/header-bg.webp)",
          backgroundSize: "1920px 720px",
          backgroundPositionY: "top",
          backgroundPositionX: "center",
        }}
      >
        {children}
      </section>
      <Footer />
    </>
  );
}
