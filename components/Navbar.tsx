"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Worlds", href: "#worlds" },
  { label: "Signals", href: "#videos" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 py-3 backdrop-blur-2xl">
        <a href="#" className="text-sm font-semibold tracking-[0.32em]">
          FESORIA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/55 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://x.com/fesoriaxyz"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-[1.03]"
          >
            Follow the signal
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
