const socials = [
  ["X", "https://x.com/fesoriaxyz"],
  ["Instagram", "https://instagram.com/fesoriaxyz"],
  ["TikTok", "https://tiktok.com/@fesoriaxyz"],
  ["YouTube", "https://youtube.com/@fesoriaxyz"],
  ["Telegram", "https://t.me/fesoriaxyz"],
];

export default function Footer() {
  return (
    <footer className="px-5 pb-8 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[92rem] overflow-hidden border-t border-white/15 py-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.32em]">FESORIA</p>
            <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-[-0.055em] sm:text-7xl">
              The next world is already transmitting.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-10 md:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {socials.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/55 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
            <p className="text-sm text-white/35">
              © {new Date().getFullYear()} FESORIA. One universe. Infinite worlds.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
