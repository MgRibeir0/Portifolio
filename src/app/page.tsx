import FloatingMenu from "@components/FloatingMenu";
import AboutMe from "@components/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 relative overflow-hidden">
      <div className="scanlines fixed inset-0 pointer-events-none"></div>
      <FloatingMenu />
      <AboutMe />
    </main>
  );
}
