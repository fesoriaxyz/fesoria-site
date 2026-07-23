"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Worlds", href: "/#worlds" },
  { label: "Reimagined", href: "/#reimagined" },
  { label: "Citizens", href: "/#citizens" },
  { label: "Signals", href: "/#transmissions" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="nav-glass mx-auto flex max-w-[92rem] items-center justify-between px-5 py-3">
        <a href="/" className="text-xs font-semibold tracking-[0.38em] sm:text-sm">
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
            href="/#join"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Join the signal
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
        <div className="nav-glass mx-auto mt-2 max-w-[92rem] p-5 md:hidden">
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
            <a
              href="/#join"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-3 text-center font-medium text-black"
            >
              Join the signal
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
