"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LeafIcon from "@/components/LeafIcon/LeafIcon";
import styles from "./Navigation.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/treatments", label: "Treatments" },
  { href: "/about", label: "About" },
  { href: "/results", label: "Results" },
  { href: "/book", label: "Book" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`${styles.wrap} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.pill} aria-label="Primary">
          <Link href="/" className={styles.logo}>
            <LeafIcon size={18} />
            <span>Nirva Skin</span>
          </Link>

          <ul className={styles.links}>
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className={`${styles.link} ${active ? styles.active : ""}`}>
                    {active && <span className={styles.dot} aria-hidden="true">✦</span>}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/book" className={styles.cta}>
            Book Consultation
          </Link>

          <button
            type="button"
            className={styles.burger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}>
        <button
          type="button"
          className={styles.close}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <ul className={styles.overlayLinks}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.overlayLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <LeafIcon size={28} className={styles.overlayLeaf} />

        <Link href="/book" className={`btn btn--primary ${styles.overlayCta}`}>
          Book Consultation
        </Link>
      </div>
    </>
  );
}
