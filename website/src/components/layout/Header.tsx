"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-navy-800"
          : "bg-transparent"
      )}
    >
      <div className="container-md">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link
            href="/"
            className="font-display font-bold text-lg text-white tracking-tight hover:text-blue-400 transition-colors"
          >
            NH <span className="text-blue-500">Consulting</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-white bg-navy-800"
                    : "text-slate-400 hover:text-white hover:bg-navy-800"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/kontakt">Projekt besprechen</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-md border-b border-navy-800">
          <div className="container-md py-4 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-white bg-navy-800"
                    : "text-slate-300 hover:text-white hover:bg-navy-800"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild size="sm" className="w-full">
                <Link href="/kontakt">Projekt besprechen</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
