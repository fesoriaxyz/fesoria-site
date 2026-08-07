import { Instagram, Play, Send } from "lucide-react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import WorldCard from "@/components/WorldCard";

const worlds = [
  { title: "Floating City", era: "A civilization above the clouds", description: "Ancient engines keep an impossible city suspended while a dormant signal begins to pulse beneath its streets.", image: "/worlds/floating-city-ep01.webp", href: "#chapter-one", status: "Discovered" },
  { title: "Atlantis", era: "The lost world beneath the surface", description: "Living light, submerged temples and a civilization that remembers the origin of the signal.", image: "/worlds/atlantia-ep03.webp", href: "/worlds/atlantia", status: "Explore" },
  { title: "Neo Tokyo", era: "The future has no curfew", description: "A neon megacity moving beyond permission, where a hidden transmission travels through every network.", image: "/worlds/neo-tokyo-ep02.webp", href: "/worlds/tokyo-2147", status: "Explore" },
  { title: "Dracula Realm", era: "A kingdom beyond the last moon", description: "Gothic citadels, ancient bloodlines and a world whose darkest secret remains locked inside the archive.", image: "/worlds/the-portal-ep05.webp", href: "#next-transmission", status: "Locked" },
] as const;

const timeline = [
  { code: "CHAPTER I", title: "The First Signal", status: "Complete", complete: true },
  { code: "CHAPTER II", title: "The Archive", status: "Complete", complete: true },
  { code: "CHAPTER III", title: "The Guardian", status: "Complete", complete: true },
  { code: "CHAPTER IV", title: "The Lost World", status: "Complete", complete: true },
  { code: "CHAPTER V", title: "Coming Soon", status: "Unknown", complete: false },
] as const;

const chapterTwoEmbed = "https://www.youtube-nocookie.com/embed/fFAkYf4HSgY?rel=0";
const chapterThreeEmbed = "https://www.youtube-nocookie.com/embed/OZ7NpdlVMn4?rel=0";
const chapterFourEmbed = "https://www.youtube-nocookie.com/embed/nlfa41nKSMk?rel=0";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Navbar />
      <Hero />

      <section id="episodes" className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem]">
          <p className="eyebrow">Episodes</p>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="section-title">The transmission has begun.</h2>
            <p className="section-copy lg:mb-2">Four chapters. One signal crossing worlds. Watch the story unfold in chronological order.</p>
          </div>
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-[92rem] gap-16 lg:grid-cols-2">
          <Reveal>
            <article id="chapter-one" className="episode-card">
              <div className="episode-meta"><span>Chapter I</span><span className="episode-complete">Complete</span></div>
              <div className="transmission-frame transmission-frame-wide">
                <iframe src="https://www.youtube-nocookie.com/embed/7mMqf1nTh_M?rel=0" title="FESORIA â€” Chapter I: The First Signal" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                <div className="transmission-mark"><Play size={15} fill="currentColor" /> Chapter I</div>
              </div>
              <h3>The First Signal</h3>
              <p>The observatory receives a transmission that was never meant to be found.</p>
            </article>
          </Reveal>
          <Reveal>
            <article id="chapter-two" className="episode-card">
              <div className="episode-meta"><span>Chapter II</span><span className="episode-complete">Complete</span></div>
              <div className="transmission-frame transmission-frame-wide transmission-frame-archive">
                <iframe src={chapterTwoEmbed} title="FESORIA â€” Chapter II: The Archive" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                <div className="transmission-mark"><Play size={15} fill="currentColor" /> Chapter II</div>
              </div>
              <h3>The Archive</h3>
              <p>Four preserved worlds awaken â€” and something in the darkness awakens with them.</p>
            </article>
          </Reveal>
          <Reveal>
            <article id="chapter-three" className="episode-card">
              <div className="episode-meta"><span>Chapter III</span><span className="episode-complete">Complete</span></div>
              <div className="transmission-frame transmission-frame-wide">
                <iframe src={chapterThreeEmbed} title="FESORIA â€” Chapter III: The Guardian" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                <div className="transmission-mark"><Play size={15} fill="currentColor" /> Chapter III</div>
              </div>
              <h3>The Guardian</h3>
              <p>An ancient protector reveals a missing world â€” and prepares Serephina for the journey ahead.</p>
            </article>
          </Reveal>
          <Reveal>
            <article id="chapter-four" className="episode-card">
              <div className="episode-meta"><span>Chapter IV</span><span className="episode-complete">Complete</span></div>
              <div className="transmission-frame transmission-frame-wide transmission-frame-archive">
                <iframe src={chapterFourEmbed} title="FESORIA â€” Chapter IV: The Lost World" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                <div className="transmission-mark"><Play size={15} fill="currentColor" /> Chapter IV</div>
              </div>
              <h3>The Lost World</h3>
              <p>A forgotten civilization is revealed â€” and its destruction may not have been an accident.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="timeline" className="border-y border-white/10 bg-[#070707] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal className="mx-auto max-w-[92rem]">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div><p className="eyebrow">Timeline</p><h2 className="section-title">Every chapter moves the signal closer.</h2></div>
            <p className="section-copy md:justify-self-end">The first four transmissions have been recovered. What follows remains hidden beyond the archive.</p>
          </div>
          <div className="mt-16 border-t border-white/12">
            {timeline.map((chapter) => (
              <article key={chapter.code} className="grid gap-4 border-b border-white/12 py-7 sm:grid-cols-[0.38fr_1fr_auto] sm:items-center sm:py-9">
                <span className="text-xs font-medium tracking-[0.24em] text-white/45">{chapter.code}</span>
                <h3 className={`text-2xl font-medium tracking-[-0.035em] sm:text-4xl ${chapter.complete ? "" : "text-white/35"}`}>{chapter.title}</h3>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/58">
                  <span className={`h-2 w-2 rounded-full ${chapter.complete ? "bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" : "bg-white/20"}`} />{chapter.status}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="worlds" className="px-3 py-24 sm:px-5 lg:py-32">
        <Reveal className="mx-auto mb-16 max-w-[92rem] px-2 sm:px-3">
          <p className="eyebrow">The Four Worlds</p>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <h2 className="section-title">Four civilizations. One hidden connection.</h2>
            <p className="section-copy lg:mb-2">Enter the worlds revealed by the archive. Some are open. Others are still waiting for their transmission.</p>
          </div>
        </Reveal>
        <div className="mx-auto grid max-w-[92rem] gap-3">
          {worlds.map((world, index) => <Reveal key={world.title}><WorldCard {...world} index={index} /></Reveal>)}
        </div>
      </section>

      <section id="next-transmission" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <Reveal className="next-transmission mx-auto max-w-[92rem]">
          <div className="next-transmission-signal" />
          <div className="relative z-10 text-center"><p className="eyebrow">Next Transmission</p><h2>Coming Soon</h2><p>Chapter V remains encrypted.</p></div>
        </Reveal>
      </section>

      <section id="join" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="signal-join mx-auto max-w-[92rem]">
          <div className="signal-join-glow" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div><p className="eyebrow">Follow the transmission</p><h2 className="max-w-5xl text-[clamp(3.4rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em]">The signal is still active.</h2></div>
            <div className="lg:pb-2">
              <p className="section-copy">Follow FESORIA for new chapters, recovered signals and glimpses into the worlds beyond the archive.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="https://t.me/fesoriaxyz" target="_blank" rel="noreferrer" className="button-primary inline-flex items-center justify-center gap-2">Join Telegram <Send size={17} /></a>
                <a href="https://instagram.com/fesoriaxyz" target="_blank" rel="noreferrer" className="button-ghost inline-flex items-center justify-center gap-2">Follow Instagram <Instagram size={17} /></a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}

