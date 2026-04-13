import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
