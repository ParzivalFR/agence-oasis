"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuItemTypes } from "@/types/MenuItemsTypes";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlignJustify,
  CircleHelp,
  Home,
  Mailbox,
  PiggyBank,
  Star,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const menuItem: MenuItemTypes[] = [
  {
    label: "Accueil",
    href: "/",
    icon: () => <Home className="size-5" />,
  },
  {
    label: "Témoignages",
    href: "#testimonials",
    icon: () => <Star className="size-5" />,
  },
  {
    label: "Tarifs",
    href: "#pricing",
    icon: () => <PiggyBank className="size-5" />,
  },
  {
    label: "FAQs",
    href: "#faq",
    icon: () => <CircleHelp className="size-5" />,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: () => <Mailbox className="size-5" />,
  },
];

export function SiteHeader() {
  const id = useId();
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full -translate-y-4 animate-fade-in border-b opacity-0 backdrop-blur-md [--animation-delay:600ms]">
        <div className="container relative flex h-14 items-center justify-between px-2">
          <Link href="/">
            <Avatar>
              <AvatarImage src="/logo-todo.png" />
              <AvatarFallback>TO</AvatarFallback>
            </Avatar>
          </Link>
          <div className="hidden h-full items-center md:flex">
            <Link className="mr-6 text-sm" href="/signin">
              Connexion
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "mr-6 text-sm"
              )}
              href="/signup"
            >
              S'inscrire
            </Link>
            <ThemeToggle />
          </div>
          <div className="ml-6 flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              <AlignJustify />
            </Button>
          </div>
        </div>
      </header>

      {/* ANIMATION de FRAMER MOTION */}

      <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobilenavbarVariant}
          animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          className={cn(
            `fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px] `,
            {
              "pointer-events-none": !hamburgerMenuIsOpen,
            }
          )}
        >
          <div className="container flex h-14 items-center justify-between px-2 py-10">
            <Link href="/" className="px-4">
              <Image src="/logo-todo.png" width={60} height={60} alt="logo" />
            </Link>
            <Button
              variant="ghost"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              <XIcon
                size={36}
                className="transition duration-500 hover:rotate-180"
              />
            </Button>
          </div>
          <motion.ul
            className={`flex flex-col pl-4 pt-12 uppercase ease-in md:flex-row md:items-center md:normal-case`}
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          >
            {menuItem.map((item) => (
              <motion.li
                variants={mobileLinkVar}
                key={id + item.label}
                className="px-6 py-2 md:border-none"
              >
                <Link
                  className={`hover:text-grey transtion-colors flex h-[var(--navigation-height)] w-full items-center gap-4 rounded-md text-xl transition-[color,transform] duration-500 hover:bg-secondary/40 md:translate-y-0 md:text-sm md:transition-colors  ${
                    hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""
                  }`}
                  href={item.href}
                  onClick={() => setHamburgerMenuIsOpen(false)}
                >
                  <span className="rounded-md bg-secondary/60 p-2">
                    {item.icon()}
                  </span>
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </>
  );
}
